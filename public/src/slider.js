'use strict';

// ******************************************************************** VARIABLEN DEFINIEREN / ARRAYS ERSTELLEN ********************************************************************

// slideshow elemente
const slideshow = document.getElementById('slideshow7S');
let autoSlide = setInterval(move, 3000); // auto function
const exit = document.getElementById('exitBtn');

// buttons
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// images
const pics = [
  'Clouds.png',
  'Everest.png',
  'Aconcagua.png',
  'Denali.png',
  'Elbrus.png',
  'Kili.png',
  'Vinson.png',
  'Kosciuszko.png'
];

const titles = [
  'EN ROUTE...',
  'EVEREST',
  'ACONCAGUA',
  'DENALI',
  'ELBRUS',
  'KILIMANJARO',
  'VINSON',
  'KOSCIUSZKO',
]

// ******************************************************************** FOR EACH LOOP ********************************************************************

// In this forEach loop we generate <html>, kind of like simulating how we would do it in the html doc. e.g. <img src='Denali.png' alt='mountain picture' /> 
pics.forEach((pic, index) => {

  // try putting them in a div, img and title so that they show together at the same time
  const slide = document.createElement('div');
  slide.classList.add('slide');


  const newPic = document.createElement('img'); // important! here goes the 'tag element' not just any name (like I had)
  // console.log(newPic);
  newPic.src = `./img/${pic}`; // our variable goes inside these brackets ${var} 
  newPic.alt = titles[index]; // `${pic}` here I'd get this back: "Everest.png"

  const newTitle = document.createElement('h2'); // Trying to add a title to every picture
  newTitle.textContent = titles[index];

  slide.appendChild(newPic); // add pics to the slide div
  slide.appendChild(newTitle); // add titles to the slide div
  slideshow.appendChild(slide); // add the whole div with img and title to the slideshow
});

const allPics = Array.from(document.querySelectorAll('img')); // we just created an array with all the pictures here and this will also reflect as the new prototype

allPics[0].classList.add('img-show'); // the first pic will be set as 'active'// console.log(allPics[0]);

const allTitles = Array.from(document.querySelectorAll('h2'));
allTitles[0].classList.add('title-show');

// ******************************************************************** SLIDE FUNCTION ********************************************************************

function move(e) {
  clearInterval(autoSlide); // in order to 'reset' the auto function to avoid conflict when clicking on the R L buttons, we need to first clear the function
  autoSlide = setInterval(move, 3000); // then activate it again, assigning it a new value (reason why we used let and not const)
  let activeIndex;
  allPics.forEach((pic, idx) => { // we want to loop through the pics and indeces
    if (pic.classList == 'img-show') { // find which pics have this class name
      activeIndex = idx; // take the index into account, important for going either R or L
      pic.classList.remove('img-show'); // and remove the class list from the actual picture, so that another one can take its place
      allTitles[idx].classList.remove('title-show'); // same story with the title
    }
  });

  let eventId; // we need to look for an event because we do not have a target (eg. R/L button)

  if (!e) { // if there is no event, 
    eventId = 'right'; // then show pictures 'clockwise'
  } else { // otherwise use the current target
    eventId = e.currentTarget.id; // current Target = the whole div tag
  }

  if (eventId == 'right') { // by a click to the R
    if (activeIndex >= allPics.length - 1) { // if this condition is met
      activeIndex = 0; // the index would be 0
    } else {
      activeIndex += 1; // otherwise the pic next on the index will come up
    }
  } else {
    if (activeIndex <= 0) {
      activeIndex = allPics.length - 1; // we want to reduce the index by one here
    } else {
      activeIndex -= 1;
    }
  }

  // the classes of the pics and titles will be removed to be assigned again when they meet the right conditions, or the right index number
  allPics[activeIndex].classList.add('img-show');
  allTitles[activeIndex].classList.add('title-show');
  allTitles[activeIndex].style.display = 'block';

  allTitles.forEach((title, idx) => {
    if (idx !== activeIndex) {
      title.style.display = 'none';
    }
  })


  // ******************************************************************** TOGGLE BUTTON PLAY/PAUSE ********************************************************************

  let isPlaying = true;
  let playPauseBtn = document.getElementById('pause');

  function pause() {
    playPauseBtn.innerHTML = 'Play';
    isPlaying = false;
    clearInterval(autoSlide); // to cancel the auto function
  }

  function play() {
    playPauseBtn.innerHTML = 'Pause';
    isPlaying = true;
    autoSlide = setInterval(move, 3000); // to reactivate the auto function
  }

  playPauseBtn.onclick = function () {
    if (isPlaying) {
      pause();
    }
    else {
      play();
    }
  };
}

leftBtn.addEventListener('click', (e) => move(e));
rightBtn.addEventListener('click', (e) => move(e));


// ******************************************************************** EXIT BUTTON ********************************************************************
// back to the previous page
exitBtn.addEventListener('click', () => {
  window.history.back();
});
// ******************************************************************** click on handy vs. hover on web ********************************************************************
document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM fully loaded and parsed");

	// Check if the screen width is less than 768px (mobile)
	function isMobile() {
		return window.innerWidth <= 768;
	}

	document.querySelectorAll(".peaks__span").forEach((item) => {
		console.log("Found element:", item);

		item.addEventListener("click", function () {
			// Only trigger click event if it's mobile
			if (isMobile()) {
				console.log("Click event triggered on:", this);

				const message = this.getAttribute("data-content");
				console.log("Data content:", message);

				let mobileContent = this.querySelector(".mobile-content");
				if (!mobileContent) {
					mobileContent = document.createElement("div");
					mobileContent.classList.add("mobile-content");
					this.appendChild(mobileContent);
				}

				mobileContent.textContent = message;
				this.classList.toggle("show-content");
			}
		});
	});
});

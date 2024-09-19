
window.onload = window.scrollTo(0, document.documentElement.scrollHeight / 2);

let lastScrollTop = 0;
let direction = '';

window.addEventListener('scroll', function() {
	let scrollTop = window.scrollY || document.documentElement.scrollTop;
	if (scrollTop < lastScrollTop) {
		direction = 'up';
	} else {
		direction = 'down';
	}
	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

	// Change color based on scroll direction
	if (direction === 'up') {
		document.body.style.backgroundColor = 'darkred';
	} else {
		document.body.style.backgroundColor = 'darkblue';
	}

	// Change back to original color after a short delay
	setTimeout(function() {
		if (direction === 'up') {
			document.body.style.backgroundColor = 'red';
		} else {
			document.body.style.backgroundColor = 'blue';
		}
	}, 100); // Adjust the delay as needed
});
direction = '';

// Initialize direction based on initial scroll position
let initialScrollTop = window.scrollY || document.documentElement.scrollTop;
direction = initialScrollTop > 0 ? 'down' : 'up';

let waitingForDown = true;
let waitingForUp = true;

window.addEventListener('scroll', function() {
	if (direction === 'up') {
		if (waitingForDown) {
			document.body.style.backgroundColor = 'red';
			waitingForDown = false;
		}
		waitingForUp = true;
	}
	if (direction === 'down') {
		if (waitingForUp) {
			document.body.style.backgroundColor = 'blue';
			waitingForUp = false;
		}
		waitingForDown = true;
	}
});

const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');

// set up the time
const updateTime = () => {
	const currentTime = new Date();

	let currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();
	let currentSecs = currentTime.getSeconds();
	if (currentHour > 12) {
		currentHour -=12;
	}

	hourEl.textContent = currentHour.toString();
	minuteEl.textContent = currentMinute.toString().padStart(2, '0');
	secondEl.textContent = currentSecs.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();
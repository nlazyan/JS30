'use strict'

const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const date = new Date();
	const seconds = date.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate( ${secondsDegrees}deg)`;

	const mins = date.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hour = date.getHours();
	const hourDegrees = ((hour / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);

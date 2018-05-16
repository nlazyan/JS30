'use strict'
let s = new Date().getSeconds()*6+96;
let m = new Date().getMinutes()*6+96;
let h = new Date().getHours()*6 +90;
document.querySelector('.min-hand').style.transform = `rotate(${m}deg)`;;
document.querySelector('.hour-hand').style.transform = `rotate(${h}deg)`;

console.log(s);
setInterval(function sec(){
	let sec = document.querySelector('.sec-hand');
	sec.style.transform = `rotate(${s}deg)`;
    s +=6;
	if(s%360==0){
		m +=6;
		setInterval(function min(){
	      let min = document.querySelector('.min-hand');
	      min.style.transform = `rotate(${m}deg)`;	      
        }, 1000);
    }
    if(m%360==0&&s%360==0){
	      h +=6;
	      setInterval(function hour(){
	         let hour = document.querySelector('.hour-hand');
             hour.style.transform = `rotate(${h}deg)`;
              }, 1000);
    }
}, 1000);





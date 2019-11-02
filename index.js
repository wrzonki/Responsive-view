let screen = document.getElementById('screen');
let h2 = document.querySelectorAll('ul h2');
let li = document.querySelectorAll('ul li');

$(document).ready(function(){
	screen.innerHTML = '<object data="layouts/index.html"/>'
});

const setDesktop = () =>{
	screen.setAttribute("style", "width:1200px; height:650px; border:30px solid #222;");
	document.querySelector('.end').style.display = "none";
};
const setTablet = () =>{
	screen.setAttribute("style", "width:650px; height:750px; border:30px solid #222;");
	document.querySelector('.end').style.display = "none";
};
const setMobile= () =>{
	screen.setAttribute("style", "width:350px; height:700px; border:10px solid #222;");
	document.querySelector('.end').style.display = "none";
};

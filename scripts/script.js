
window.onscroll = function(){

	if ( document.documentElement.scrollTop > 1000) {
		document.getElementById("to-top").style.display = "block";
	} else {
		document.getElementById("to-top").style.display = "none";
	}
};

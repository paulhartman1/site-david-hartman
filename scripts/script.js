
var dhart = function(){};
// add functionality to auto populate carousel
//create [] of carousel images

dhart.prototype.populateCarousel = function () {
var image = 'resources/img/Dave Hartman - Artist profile.jpg';

};

dhart.prototype.init = function () {
	this.populateCarousel();
};

window.onscroll = function(){
	if ( document.documentElement.scrollTop > 1000) {
		document.getElementById("to-top").style.display = "block";
	} else {
		document.getElementById("to-top").style.display = "none";
	}
};

$(function(){
window.dhart = new dhart;
dhart.init();
});

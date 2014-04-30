
// *** VARIABLE SETUP *** //

var fadeOutTime = 500,
    fadeInTime = 1000;

// VIEWS ----------
var currentView = 1,
    doodleView = 4,
    startView = 3,
    aboutView = 2,
    workView = 1,
	workItemView = 1.5;

// COLORS ----------
var highlightColor = '#3981ea',
    blueGlowColor = "#0b7aff",
    whiteGlowColor = '#c0e0ff',
    brightBlue = '#3981ea',
    primaryBlue = '#2c5bc4',
    fadedBlue = '#1b3c6d';




// FUNCTIONS -------



/* open nav help */
function useNavHelp() {
    $('#nav-info').fadeIn(fadeInTime);	
    $('#nav-info-triangle').fadeIn(fadeInTime);	
}

function slowBounceNav() {
	$('#footer-pusher').animate({height: "10px"}, 500, "swing");
	$('#footer-pusher').animate({height: "0px"}, 500, "swing",slowBounceNav);

}

function ridNavHelp() {
	$('#nav-info').fadeOut(fadeOutTime);
	$('#nav-info-triangle').fadeOut(fadeOutTime);

}

/** open ABOUT view **/
function openAboutView() {

}





$(document).ready(function(){

window.setTimeout(useNavHelp,1000);
window.setTimeout(slowBounceNav, 2000);

});



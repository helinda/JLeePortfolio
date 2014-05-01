
// *** VARIABLE SETUP *** //

var fadeOutTime = 500,
    fadeInTime = 1000;

// VIEWS ----------
var currentView = 3,
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

var Help1 = window.setTimeout(useNavHelp,fadeInTime*3);
var Help2 = window.setTimeout(slowBounceNav, fadeInTime*3 + 500);

function setTimeoutHelp() {
	Help1;
	Help2;
}

function animateOpenStartView() {
    	currentView = startView;
   	$('#start-container').fadeIn(fadeInTime);
        setTimeoutHelp();	
}

function animateCloseStartView() {
    	ridNavHelp();
	clearTimeout(Help1);
	clearTimeout(Help2);
	$('#start-container').fadeOut(fadeOutTime);
}

function openStartView() {
	    if (currentView != startView) {
		if (currentView == aboutView) {
			animateCloseAboutView();
		}
		else if (currentView == workView) {
			animateCloseWorkView();
		}
		Help1 = window.setTimeout(useNavHelp,fadeInTime*3);
		Help2 = window.setTimeout(slowBounceNav, fadeInTime*3 + 500);
		animateOpenStartView();
	    }

}

/** open ABOUT view **/
function animateOpenAboutView() {
   	currentView = aboutView;
	$('#about-container').fadeIn(1000);
        var left = ( $(window).width() - $('#about-content').width() ) / 2+$(window).scrollLeft() + "px";	
	$('#about-content').animate({left: left},1000,"swing");

	/*$('#about-content').animate({marginLeft: "auto"},1000,"swing");*/
}

function animateCloseAboutView() {
	$('#about-container').fadeOut(1000);
	$('#about-content').animate({left: '-800px'},1000,"swing");

}

function openAboutView() {
	    if (currentView != aboutView) {
		if (currentView == startView) {
			animateCloseStartView();
			animateOpenAboutView();
		}
		else if (currentView == workView) {
			animateCloseWorkView();
			setTimeout(animateOpenAboutView, fadeOutTime);
		}
		
	    }
}

/** open WORK view **/
function animateOpenWorkView() {
	currentView = workView;
	$('#work-container-boss').fadeIn(1000);
	$('#work-container').animate({top: '0px'},1000,"swing");
}

function animateCloseWorkView(){
	$('#work-container-boss').fadeOut(1000);
	$('#work-container').animate({top: '-400px'}, 1000, "swing");
}

function openWorkView () {
	if (currentView != workView) {
		if (currentView == startView) {
			animateCloseStartView();
			animateOpenWorkView();
		}
		else if (currentView == aboutView) {
			animateCloseAboutView();
			setTimeout(animateOpenWorkView, fadeOutTime);
		}		
	}
}





$(document).ready(function(){

/*animateOpenWorkView();*/

    animateOpenStartView(); 

    $('#footer-info').click(function() {
	    ridNavHelp();
    });

    	$('#nav-a').click(function() {
		openAboutView();
	});

	$('#nav-s').click(function() {
		openStartView();
	    
	});

	$('#nav-w').click(function() {
		openWorkView();
	});


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) { // w
	$('#nav-w').animate({color: 'white'}, 500);
	openWorkView();
    }
    else if(event.keyCode == 65 ) { // a 
	openAboutView();
    }
    else if(event.keyCode == 83 ) { // s
	openStartView();
    }
    else if(event.keyCode == 68 ) { // d
	alert("d was pressed");
    }


});


	$('#email').zclip({
	    path:'jquery.zclip.min.js',
	    copy: $('#email-text').text()
	});


	
});



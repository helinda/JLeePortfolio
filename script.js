
// *** VARIABLE SETUP *** //

var fadeOutTime = 500,
    fadeInTime = 1000;

// VIEWS ----------
var currentView = 0,
    doodleView = 4,
    startView = 3,
    aboutView = 2,
    workView = 1,
	workItemView = 1.5;

var barMinimized = false;

// COLORS ----------
var highlightColor = '#3981ea',
    blueGlowColor = "#0b7aff",
    whiteGlowColor = '#c0e0ff',
    brightBlue = '#3981ea',
    primaryBlue = '#2c5bc4',
    fadedBlue = '#1b3c6d',
    buttonGrey = '#252526',
    buttonHoverGrey = '#353536';




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
	$('#nav-s').animate({backgroundColor: buttonHoverGrey, color: brightBlue}, 500);	
}

function animateCloseStartView() {
    	ridNavHelp();
	clearTimeout(Help1);
	clearTimeout(Help2);
	$('#start-container').fadeOut(fadeOutTime);
	$('#nav-s').animate({backgroundColor: buttonGrey, color: primaryBlue}, 500);
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
	$('#nav-a').animate({backgroundColor: buttonHoverGrey, color: brightBlue}, 500);


	/*$('#about-content').animate({marginLeft: "auto"},1000,"swing");*/
}

function animateCloseAboutView() {
	$('#about-container').fadeOut(1000);
	$('#about-content').animate({left: '-800px'},1000,"swing");
	$('#nav-a').animate({backgroundColor: buttonGrey, color: primaryBlue}, 500);

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
		maximizeNavBar();	
		
	    }
}

/** open WORK view **/
function animateOpenWorkView() {
	currentView = workView;
	$('#work-container-boss').fadeIn(1000);
	$('#work-container').animate({top: '0px'},1000,"swing");
	$('#nav-w').animate({backgroundColor: buttonHoverGrey, color: brightBlue}, 500);
}

function animateCloseWorkView(){
	$('#work-container-boss').fadeOut(1000);
	$('#work-container').animate({top: '-400px'}, 1000, "swing");
	$('#nav-w').animate({backgroundColor: buttonGrey, color: primaryBlue}, 500);
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
		maximizeNavBar();		
	}
}

function minimizeNavBar() {
	if (barMinimized == true) {
		return;
	} else {
		//$('#nav-triangle-container').animate({marginTop: '40px'},300);

		$('.wrapper').animate({ marginBottom: "-300px"}, 500);
		$('#nav-content').animate({height: '80px'}, 500);
		$('#nav-triangle-container').animate({marginTop: '40px'},500);
		$('#name').animate({fontSize: '21px'}, 500);
		$('#title').animate({fontSize: '9px'}, 500);
		$('#nav-content-wrapper').animate({padding: '20px'}, 500);
		$('#nav-bottom').animate({height: '30px'});
		$('.nav-bt').animate({width: '40px', height: '25px', fontSize: '20px', marginRight: '5px', marginBottom: '5px'}, 500);
		$('#nav-square-container').animate({marginTop: '0px', padding: '10px 50px 15px 50px', width: '150px', height: '55px'}, 500);
		$('#first-layer').animate({width: '63px', height: '30px', paddingBottom: '1px'}, 500);
		$('#nav-triangle').animate({opacity: '0.0'}, 500);
		$('#nav-square-container').css({backgroundColor: '#101011'});
		//$('#nav-triangle-container').animate({marginTop: '40px'},500);
		barMinimized = true;

	}
}

function maximizeNavBar() {
	if (barMinimized == false) {
		return;
	} else {
		$('.wrapper').animate({ marginBottom: "-350px"}, 500);
		$('#nav-content').animate({height: '120px'}, 500);
		$('#nav-triangle-container').animate({marginTop: '20px'},500);
		$('#name').animate({fontSize: '42px'}, 500);
		$('#title').animate({fontSize: '17px'}, 500);
		$('#nav-content-wrapper').animate({padding: '20px'}, 500);
		$('#nav-bottom').animate({height: '60px'});
		$('.nav-bt').animate({width: '80px', height: '45px', fontSize: '32px', marginRight: '10px', marginBottom: '10px'}, 500);
		$('#nav-square-container').animate({marginTop: '-10px', padding: '0px', width: '270px', height: '100px'}, 500);
		$('#first-layer').animate({width: '90px', height: '0px', paddingBottom: '0px'}, 500);
		$('#nav-triangle').animate({opacity: '1.0'}, 500);
		$('#nav-square-container').css({backgroundColor: 'transparent'});
		barMinimized = false;
	}
}





$(document).ready(function(){

/*animateOpenWorkView();*/

    /*animateOpenStartView();*/ 

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


	/* toggling the nav bar */

	$('#cow-container').click( function() {
		minimizeNavBar();
	});


	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 87) { // w
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




	/* click to copy not working ... */
	$('#email').zclip({
	    path:'jquery.zclip.min.js',
	    copy: $('#email-text').text()
	});






	
});




// *** VARIABLE SETUP *** //

var fadeOutTime = 500,
    fadeInTime = 1000;

// VIEWS ----------
var currentView = 0,
    doodleView = 4,
    startView = 3,
    aboutView = 2,
    workView = 1,
    COWView = 1.33,
    GGView = 1.66,
    screenShotView = 1.1;

var barMinimized = false;

// COLORS ----------
var darkGrey = '#101011',
    highlightColor = '#3981ea',
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

/** open START view **/

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
		else if ((currentView == workView) || (currentView == COWView) || (currentView == GGView)) {
			animateCloseWorkView();
		}
		Help1 = window.setTimeout(useNavHelp,fadeInTime*3);
		Help2 = window.setTimeout(slowBounceNav, fadeInTime*3 + 500);
		animateOpenStartView();
	    }
		maximizeNavBar();

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
	ridNavHelp();
	    if (currentView != aboutView) {
		if (currentView == startView) {
			animateCloseStartView();
			animateOpenAboutView();
		}
		else if ((currentView == workView) || (currentView == COWView) || (currentView == GGView)) {
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
	setTimeout(function(){$('#games-container').css({display: 'block'});}, 1000);
	revertWorkTitle();
	hideCOW();
	hideGG();

}

function openWorkView () {
    	ridNavHelp();
	if (currentView != workView) {
		if (currentView == startView) {
			animateCloseStartView();
			animateOpenWorkView();
		}
		else if (currentView == aboutView) {
			animateCloseAboutView();
			setTimeout(animateOpenWorkView, fadeOutTime);
		}
		else if (currentView == COWView) {
			hideCOW();
			setTimeout(animateOpenWorkView, fadeOutTime);
		}
		else if (currentView == GGView) {
			hideGG();
			setTimeout(animateOpenWorkView, fadeOutTime);
		}
		maximizeNavBar();		
	}
}

var projectViewOn = false;
function changeWorkTitle() {
	if (projectViewOn) {
		$('#work-title').animate({fontSize: '16px'}, 500);
		$('#work-title-container').animate({height: '30px', width: '110px', opacity: 0.5/*backgroundColor: 'transparent'*/},500);
		$('#work-title-triangle').animate({borderBottomWidth: '40px', borderRightWidth: '40px', opacity: 0.5/*, borderBottomColor: 'transparent', borderRightColor: 'transparent'*/}, 500); 

	}
}

function revertWorkTitle() {
	if (projectViewOn) {
		$('#work-title').animate({fontSize: '24px'}, 500);
		$('#work-title-container').animate({height: '40px', width: '150px', opacity: '1.0'},500);
		$('#work-title-triangle').animate({borderBottomWidth: '50px', opacity: '1.0'}, 500); 


	}
}

/** Cogs of War **/


function openCOW () {
    	ridNavHelp();
	$('#games-container').fadeOut(fadeOutTime);
	$('#cowinfo-container').fadeIn(fadeInTime);
	setTimeout(function() {$('#cow-bg').fadeIn(fadeInTime);}, 250);
	minimizeNavBar();
	projectViewOn = true;
	currentView = COWView;
	changeWorkTitle();
}

function hideCOW() {
    	ridNavHelp();
	setTimeout(function(){$('#games-container').fadeIn(fadeInTime);},fadeOutTime);
	$('#cow-bg').fadeOut(fadeOutTime);
	$('#cow-bg').fadeOut(fadeOutTime);
	maximizeNavBar();
	revertWorkTitle();
	projectViewOn = false;
	$('#cowinfo-container').fadeOut(fadeOutTime);
}

/** Grief for Glory **/

function openGG() {
    	ridNavHelp();
	$('#games-container').fadeOut(fadeOutTime);
	$('#gginfo-container').fadeIn(fadeInTime);
	setTimeout(function() {$('#gg-bg').fadeIn(fadeInTime);}, 250);
	minimizeNavBar();
	projectViewOn = true;
	currentView = GGView;
	changeWorkTitle();
}

function hideGG() {
	setTimeout(function(){$('#games-container').fadeIn(fadeInTime);},fadeOutTime);
	$('#gg-bg').fadeOut(fadeOutTime);
	maximizeNavBar();
	revertWorkTitle();
	projectViewOn = false;
	$('#gginfo-container').fadeOut(fadeOutTime);

	
}


/** manipulating the navigation bar **/

function minimizeNavBar() {
	if (barMinimized == true) {
		return;
	} else {
	    	$('#please-stay-put').animate({height: '80px'},500);
	    
		$('#nav-square-container').fadeOut(50);
		setTimeout( function() {
		$('.wrapper').animate({ marginBottom: "-300px"}, 500);
		$('#nav-content').animate({height: '80px'}, 500);
		$('#nav-container').animate({height: '110px'}, 500);
		$('#nav-container').css({position: 'fixed'});
		$('#nav-square-container').css({position: 'relative', float: 'right'});
		$('#nav-triangle-container').animate({marginTop: '40px'},500);
		$('#name').animate({fontSize: '21px'}, 500);
		$('#title').animate({fontSize: '9px'}, 500);
		$('#nav-content-wrapper').animate({padding: '20px', height: '50px'}, 500);
		$('#nav-bottom').animate({height: '30px'});
		$('.nav-bt').animate({width: '40px', height: '25px', fontSize: '20px', marginRight: '5px', marginBottom: '5px'}, 500);
		$('#nav-square-container').animate({marginTop: '0px', padding: '10px 50px 15px 50px', width: '150px', height: '55px'}, 500);
		$('#first-layer').animate({width: '63px', height: '30px', paddingBottom: '1px'}, 500);
		$('#nav-triangle').animate({opacity: '0.0'}, 500);
		$('#nav-square-container').css({backgroundColor: '#101011'});
		setTimeout( function() {$('#nav-square-container').fadeIn(500);}, 500);
		barMinimized = true;}, 50);

	}
}

function maximizeNavBar() {
	if (barMinimized == false) {
		return;
	} else {
	    	$('#please-stay-put').animate({height: '120px'},500);
		$('#nav-square-container').fadeOut(50);
		setTimeout(function () {
		$('.wrapper').animate({ marginBottom: "-350px"}, 500);
		$('#nav-content').animate({height: '120px'}, 500);
		$('#nav-triangle-container').animate({marginTop: '20px'},500);
		$('#name').animate({fontSize: '42px'}, 500);
		$('#title').animate({fontSize: '15px'}, 500);
		$('#nav-content-wrapper').animate({padding: '20px', height: '50px'}, 500);
		$('#nav-bottom').animate({height: '60px'});
		$('.nav-bt').animate({width: '80px', height: '45px', fontSize: '32px', marginRight: '10px', marginBottom: '10px'}, 500);
		$('#nav-square-container').animate({marginTop: '-10px', padding: '0px', width: '270px', height: '100px'}, 500);
		$('#first-layer').animate({width: '90px', height: '0px', paddingBottom: '0px'}, 500);
		$('#nav-triangle').animate({opacity: '1.0'}, 500);
		$('#nav-square-container').animate({backgroundColor: 'transparent'}, 100);
		setTimeout( function() { $('#nav-square-container').fadeIn(500); }, 50);
		barMinimized = false;} , 50);
	}
}



window.onload = function() {
	openStartView();
}


$(document).ready(function(){

/*animateOpenWorkView();*/

 /*   openStartView();*/

    /*animateOpenWorkView();
    openCOW();*/

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
		openCOW();
	});

	$('#gg-container').click( function() {
		minimizeNavBar();
		openGG();
	});


	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 87) { // w
		    if (currentView == screenShotView) {
			
		    } else {
			openWorkView();
		    }
		}
		else if(event.keyCode == 65 ) { // a 
		openAboutView();
		}
		else if(event.keyCode == 83 ) { // s
		openStartView();
		}
		else if(event.keyCode == 68 ) { // d
		   /* if (currentView == screenShotView) {

			$('#modal-box').animate({backgroundImage: 'url(images/'+name+')'}, 500);	
		    }*/
		alert("d was pressed");
		}


	});




	/* click to copy not working ... */
	$('#email').zclip({
	    path:'jquery.zclip.min.js',
	    copy: $('#email-text').text()
	});




	function openModalView(id) {
		var name = id + '-large.png';
		$('#modal-box').css({backgroundImage: 'url(images/'+name+')'});
		$('#modal-box').css({marginTop: document.body.scrollTop + 30 + 'px'});
		setTimeout(function(){$('#modal-container').fadeIn(fadeOutTime);},100);
		currentView = screenShotView;
	}

	function closeModalView() {
		$('#modal-container').fadeOut(fadeOutTime);
		currentView = workView;
	}

	$('#ggss1').click( function() {
	/*	openModalView();*/
    		openModalView(this.id);		
	});
	$('#ggss2').click( function() {
	/*	openModalView();*/
    		openModalView(this.id);		
	});
	$('#ggss3').click( function() {
	/*	openModalView();*/
    		openModalView(this.id);		
	});
	$('#ggss4').click( function() {
	/*	openModalView();*/
    		openModalView(this.id);		
	});
	$('#ggss5').click( function() {
	/*	openModalView();*/
    		openModalView(this.id);		
	});
	$('#ggss6').click( function() {
	/*	openModalView();*/
    		openModalView(this.id);		
	});

	$('#modal-overlay').click(function () {
		closeModalView();
	});
	$('#modal-box').click(function() {
		closeModalView();
	});



	
});



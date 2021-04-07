var config = {
    apiKey: "AIzaSyDKfbSL1CzA6Xsoz-r22Nz1iQ9LLjol0mI",
    authDomain: "snt-website.firebaseapp.com",
    databaseURL: "https://snt-website.firebaseio.com",
    projectId: "snt-website",
    storageBucket: "snt-website.appspot.com",
    messagingSenderId: "906105933125"
  };
var bl=0, gl=0;
var dn=[];
firebase.initializeApp(config);
var db = firebase.firestore();
function blogmaker(code){
    var dt=[];
    if(code!='gensec' && code!='indexblg')
    var hu = new Vue({
        el: '#blogrender',
        data () {
          return {
          bloglist: []
          }
        },
        mounted () {
        db.collection("thcclub").doc(code).get().then((doc) => {
            dt=[];
            dt.push(doc.data().src);
            dt.push(doc.data().src2);
            dt.push(doc.data().src3);
            dt.push(doc.data().src4);
            dt.push(doc.data().src5);
            execute(dt);
        });
        db.collection("thcclub").doc(code).collection("blogs").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var dx=doc.data();
                dx.time=new Date(doc.data().timeStamp.seconds*1000);
                this.bloglist.push(dx);
            });
        });
    }
});
else
var hu = new Vue({
    el: '#blogrender',
    data () {
      return {
      bloglist: []
      }
    },
    mounted () {
    db.collection("gallery").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            dt.push(doc.data().src);
        });
        if(code!='indexblg')
        execute(dt);
    });
    db.collection("gensec-blogs").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var dx=doc.data();
            dx.time=new Date(doc.data().timeStamp.seconds*1000);
            bl++;
            if(code=='indexblg' && bl<=6){
                this.bloglist.push(dx);}
            if(code!='indexblg')
                this.bloglist.push(dx);
        });
    });
}
});
}

function execute(x1){
    jQuery(document).ready(function($){
    'use strict';
    jQuery('body').backstretch(x1, {duration: 5000, fade: 500});
    });
}

function gallerymaker(code){
    if(code=='indexgallery')
    var ru = new Vue({
        el: '#galleryrender',
        data () {
          return {
          imglist: []
          }
        },
        mounted () {
        db.collection("gallery").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                gl++;
                if(gl<=9)
                    this.imglist.push(doc.data());
            });
        });
    }
    });
}
// vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}


el = document.getElementById("simple-ss");
el.onclick = links;

function links() {
  left = parseInt(getComputedStyle(el).getPropertyValue("background-position").split(" ", 1));
   
  /* DEFINE POSITIONS FOR CLICK EVENTS */
  if (left >= -400) {
  
    // First until about half way scrolled over
    alert("first");
    //window.open("https://www.google.com");
  
  } else if (left >= -1200) {
  
    // Second when half way scrolled either side
    alert("second");
    //window.open("https://www.google.com");
    
  } else if (left >= -1600) {
    
    // Third when over half way into banner
    alert("third");
    //window.open("https://www.google.com");
    
  }
   
}
//yaha se preloader
var available;
var percentage_of_page;
var half_screen;
var height;

$(window).scroll(function (e) {
    available = $(document).height();
    percentage_of_page = 0.5;
    half_screen = available * percentage_of_page;
    height = $(window).scrollTop();
    if ( height > half_screen ) {
        $(document.getElementById('notif')).show();
    } else {
        $(document.getElementById('notif')).hide();
    }
});
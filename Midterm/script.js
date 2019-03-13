window.addEventListener('DOMContentLoaded', function(e){
 var myArr;
e.preventDefault();  // any default your page may have, it will override it and just take all code from here.
	console.log("js is connected");

	var xmlhttp = new XMLHttpRequest();
var jsonurl = "photos.json";
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myArr = JSON.parse(this.responseText);
   
console.log(xmlhttp); 
console.log(myArr);
  }
  
}

xmlhttp.open("GET", jsonurl, true);
xmlhttp.send();


$(window).scroll(function(){
		 var scrollPos = $(window).scrollTop() + 88.3;  //scrollTop is built into the jQuery library  //this one the value changes with scroll
		 console.log(scrollPos);


// ********** now to calculate when a link is at the top:
	var firstOff = $("#one").offset().top; //store value of first element & the rest
	var secondOff = $("#two").offset().top;
	var thirdOff = $("#three").offset().top;
	var fourthOff = $("#four").offset().top;
	var fifthOff = $("#five").offset().top ;
	var sixthOff = $("#six").offset().top ;
	var seventhOff = $("#seven").offset().top ;
	var eigthOff = $("#eight").offset().top ;

  var heightThreshold_end  = $(".stroke").offset().top +$(".stroke").height() ;
	var height = $('#one').height();
console.log(firstOff);
console.log(height);
// console.log(secondOff);


if (scrollPos >= firstOff && scrollPos <secondOff){

		$('.onee').addClass('filled');

	var imagee = myArr[0].url;
	$("p").text(myArr[0].desc);

		$("img").attr("src",imagee);
		console.log(imagee);
       

	} else {
			$('.onee').removeClass('filled');

			 $("img").attr("src",'');

			};

	 if (scrollPos >= secondOff && scrollPos < thirdOff){
		$('.twoo').addClass('filled');

		// $('.three').fadeTo(1000, 0.1);
		$("img").attr("src",myArr[1].url);
		$("p").text(myArr[1].desc);

	}  else { $('.twoo').removeClass('filled');
				};

	 if (scrollPos >= thirdOff && scrollPos < fourthOff){
		
	 	
		$('.three').addClass('filled');

		// $('.three').fadeTo(1000,1.0);
		$("img").attr("src",myArr[2].url);
		$("p").text(myArr[2].desc);
		console.log(myArr[2].url);

	}  else { $('.three').removeClass('filled');
				};

	 if (scrollPos >= fourthOff && scrollPos < fifthOff){
		$('.four').addClass('filled');

		
		$("img").attr("src",myArr[3].url);
		$("p").text(myArr[3].desc);

	}  else { $('.four').removeClass('filled');
				};
	
	if (scrollPos >= fifthOff && scrollPos < sixthOff){
		$('.fivee').addClass('filled');

		
		$("img").attr("src",myArr[4].url);
		$("p").text(myArr[4].desc);

	}  else { $('.fivee').removeClass('filled');
				};

	if (scrollPos >= sixthOff && scrollPos < seventhOff){
		$('.sixx').addClass('filled');

		
		$("img").attr("src",myArr[5].url);
		$("p").text(myArr[5].desc);

	}  else { $('.sixx').removeClass('filled');
				};

	if (scrollPos >= seventhOff && scrollPos < eigthOff){
		$('.sevenn').addClass('filled');

		
		$("img").attr("src",myArr[6].url);
		$("p").text(myArr[6].desc);

	}  else { $('.sevenn').removeClass('filled');
				};

	if (scrollPos >= eigthOff){
		$('.eightt').addClass('filled');

		
		$("img").attr("src",myArr[7].url);
		$("p").text(myArr[7].desc);

	}  else { $('.eightt').removeClass('filled');
				};

		});  // end of scroll function


}); // end of DOM CONTENT LOADED

	
$(function(){
  // initialize the slideshow
  $('.image img').fullscreenslides();
  console.log("this is working too");
  // All events are bound to this container element
  var $container = $('#fullscreenSlideshowContainer');
  
  $container
    //This is triggered once:
    .bind("init", function() { 

      // The slideshow does not provide its own UI, so add your own
      // check the fullscreenstyle.css for corresponding styles
      $container
        .append('<div class="ui" id="fs-close">&times;</div>')
        .append('<div class="ui" id="fs-loader">Loading...</div>')
        .append('<div class="ui" id="fs-prev">&lt;</div>')
        .append('<div class="ui" id="fs-next">&gt;</div>')
        .append('<div class="ui" id="fs-caption"><span></span></div>');
      
      // Bind to the ui elements and trigger slideshow events
      $('#fs-prev').click(function(){
        // You can trigger the transition to the previous slide
        $container.trigger("prevSlide");
      });
      $('#fs-next').click(function(){
        // You can trigger the transition to the next slide
        $container.trigger("nextSlide");
      });
      $('#fs-close').click(function(){
        // You can close the slide show like this:
        $container.trigger("close");
      });
      
    })
    // When a slide starts to load this is called
    .bind("startLoading", function() { 
      // show spinner
      $('#fs-loader').show();
    })
    // When a slide stops to load this is called:
    .bind("stopLoading", function() { 
      // hide spinner
      $('#fs-loader').hide();
    })
    // When a slide is shown this is called.
    // The "loading" events are triggered only once per slide.
    // The "start" and "end" events are called every time.
    // Notice the "slide" argument:
    .bind("startOfSlide", function(event, slide) { 
      // set and show caption
      $('#fs-caption span').text(slide.title);
      $('#fs-caption').show();
    })
    // before a slide is hidden this is called:
    .bind("endOfSlide", function(event, slide) { 
      $('#fs-caption').hide();
    });
});

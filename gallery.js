 // wait until the HTML document is ready
$(document).ready(() => {

});
 // select all the slides (array)
var slides = $(".slide");
 // set the index slide (the first slide)	
var slideIndex = 0;
 // assign the slide index as the first slide(indexing into an array)
var currentSlide = slides [slideIndex];
// hide all slides

// show the first one 

//when a user clicks "next" (function)
$("#next").on('click', function(){
	$('#increaseImage' + currentImage).stop().fadeOut(1)
	increaseImage();
	$('#im' + currentImage).stop().fadeIn(1);
	});

// when a user clicks "previous" (function)
$('#previous').on('click', function(){
	$('#im' + currentImage).stop().fadeOut(1);
	decreaseImage();
	$('#im' + currentImage).stop().fadeIn(1)
});
		function increaseImage (){
			
		}




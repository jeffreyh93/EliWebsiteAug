$('#myCarousel').on('slide.bs.carousel', function(e) {
  if(e.relatedTarget.id == 'firstSlide'){
		$(".carousel-inner").css('background-color', 'orange');
  } else if(e.relatedTarget.id == 'secondSlide'){
		$(".carousel-inner").css('background-color', 'green');
  } else if(e.relatedTarget.id == 'thirdSlide') {
		$(".carousel-inner").css('background-color', 'pink');
	}
})

$('.carousel').carousel({
  interval: false,
});
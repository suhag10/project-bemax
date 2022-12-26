$(document).ready(function(){
	
	// slider-active
	$('.slider-active').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})	
	
	// project-active
	$('.project-active').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 4
			}
		}
	})
	
	// blog active
	$('.blog-active').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	
	// testimonial active
	$('.testimonial-active').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})

	// brand-active
	$('.brand-active').owlCarousel({
		loop: true,
		margin:50,
		nav: false,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 6
			}
		}
	})
	
	// video Popup
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
  
  
});
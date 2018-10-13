$(function() 
{
	$("#devLink").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#dev").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

$(function() 
{
	$("#headingLink").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#heading").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

$(function() 
{
	$("#orderLink").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#order").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

/*$(document).on("scroll", function()
{
	//console.log("Hello");
	var y = $(this).scrollTop();
	if(y > $("#navigation").offset().top)
	{
		$("#up").fadeIn();
	}
	else
	{
		$("#up").fadeOut();
	}
});*/

$(function() 
{
	$("#up").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#headingLink").offset().top; 
		$("HTML, BODY").animate({ scrollTop: 0 }, 1000); 
	});
});


$(function() 
{
    $('input[type=range]').on('input', function () {
        var c = $('input[type=range]').val();
        d = $(document).height();
        c = c/100;
        c = d*c;
        console.log(c)
        $("HTML, BODY").animate({ scrollTop: c }, 0);
        //$(window).scrollTop();
    });
});

$(function() 
{
	$(window).on('scroll', function(){
        var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

        var scrollPercent = (s / (d - c)) * 100;
        $("input[type=range]").val(scrollPercent);
        var c = 100;
        c = c - scrollPercent;
        
        if(scrollPercent > 50)
        {
            var s = "linear-gradient(to right, lightgreen "+scrollPercent+"%, white "+c+"%";
            $("input[type=range]").css("background",s);
        }
        else
        {
            var s = "linear-gradient(to left, white "+c+"%, lightgreen "+scrollPercent+"%";
            $("input[type=range]").css("background",s);  
        }
        console.clear();
        console.log(scrollPercent);
        console.log(c);
        
         window_size = $(window).height();
        console.log(window_size);
    })
});

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#878787"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "Images/sliderHeart.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#877887",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 40,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 60,
        "size": 4,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
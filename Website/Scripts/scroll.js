var scrollState = 'top';
$(function() 
{
	$("#devButton").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#devtopDiv").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

$(function() 
{
	$("#aboutButton").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#abouttopDiv").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

$(function() 
{
	$("#preorderButton").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#pretopDiv").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

$(function() 
{
	$("#titleButton").on('click', function() 
	{
		//console.log("Hello"); 
		var position = $("#top").offset().top; 
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
        //console.log(c)
        $("HTML, BODY").animate({ scrollTop: c }, 0);
        //$(window).scrollTop();
    });
});

$(function() 
{
    var aboutPosition = $("#abouttopDiv").offset().top;
    var devPosition = $("#devtopDiv").offset().top;
    var preorderPosition = $("#pretopDiv").offset().top;
	$(window).on('scroll', function(){
        var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        var scroll = $(window).scrollTop();

        var scrollPercent = (s / (d - c)) * 100;
        $("input[type=range]").val(scrollPercent);
        var c = 100;
        c = c - scrollPercent;
        var s
        if(scrollPercent > 50)
        {
             s = "linear-gradient(to right, white "+scrollPercent+"%, #9b2e58 "+c+"%";
            $("input[type=range]").css("background",s);
        }
        else
        {
            s = "linear-gradient(to left, #9b2e58 "+c+"%, white "+scrollPercent+"%";
            $("input[type=range]").css("background",s); 
          
        }
        if(scroll>=aboutPosition && scroll+30 < devPosition)
        {

             $( ".backdropNav" ).stop().animate({
               // backgroundColor: "#000",
                 backgroundColor: "rgba(255,150, 0, 0.8)"
                }, 1000 );



            
        }
        else if(scroll>=devPosition && scroll <= preorderPosition)
        {
            
                $( ".backdropNav" ).stop().animate({
                    // backgroundColor: "#000",
                    //backgroundColor: "rgba(116,173,117, 0.8)"
                    backgroundColor: "rgba(0,255,0, 0.8)"
                }, 1000 );
            
        }
        else if(scroll >= preorderPosition)
        {
            
                    $( ".backdropNav" ).stop().animate({
                    // backgroundColor: "#000",
                    backgroundColor: "rgba(255,255,255, 0.8)"
                }, 1000 );
        }
        else
        {
            
            $( ".backdropNav" ).stop().animate({
                    // backgroundColor: "#000",
                    backgroundColor: "rgba(255,255,255, 0.8)"
                }, 1000 );
        }
        console.log(scroll + " " + devPosition);
        
        
        
        //console.clear();
        //console.log(scroll + " " + aboutPosition);
       // console.log(scrollPercent);
       // console.log(c);
        
         window_size = $(window).height();
       // console.log(window_size);
    })
});

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 900,
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
        "src": "Images/bee.png",
        "width": 200,
        "height": 200
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
      "speed": 2,
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
        "distance": 100,
        "size": 12,
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





//---------------------------------
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 91,
      "density": {
        "enable": true,
        "value_area": 561.194221302933
      }
    },
    "color": {
      "value": "#e07e43"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
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
      "value": 4,
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
      "color": "#e07e43",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
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
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
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
count_particles = document.querySelector('.js-count-particles1');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
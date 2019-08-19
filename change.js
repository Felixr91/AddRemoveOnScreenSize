
		$(window).resize(function () {
		    waitForFinalEvent(function(){
		      var win = $(this); //this = window
		      if (win.width() > 768) { 
		      console.log("greater than 768");
		      $(".lux-remove").addClass("luxy-el");
		  	}
		      if (win.width() < 768) {
		      console.log("less than 768");
		      $(".lux-remove").removeClass("luxy-el");
		    }
		    }, 500, "some unique string");
		});

		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
		    if (!uniqueId) {
		      uniqueId = "Don't call this twice without a uniqueId";
		    }
		    if (timers[uniqueId]) {
		      clearTimeout (timers[uniqueId]);
		    }
		    timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();

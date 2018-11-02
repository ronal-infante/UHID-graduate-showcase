$(document).ready(function(){

  carousel();
  
  function carousel() {

    var intervals = [];
    function increment(i){
    	var j = 0;
      return function(){
      	var s = $(".entry").eq(i).find(".slide-container .slide"),
        		d = $(".entry").eq(i).find(".nav-dots label");
        s.each(function(k){$(this).removeClass("on")});
        d.each(function(k){$(this).removeClass("on")});
        if (j > s.length-1) {j = 0}  
        $(s[j]).addClass("on");
        $(d[j]).addClass("on");
        j++;
      }
    }
    function clear(i){
      return function(){
        clearInterval(intervals[i]);
      }
    }
    function startSlides(i){
      return function(){
        intervals[i] = setInterval(increment(i), 5000);
      }
    }
    $('.entry').each(function(i) {
      // $(".nav-dots label").click(function(){
      //   console.log(this);
      // });

      startSlides(i)();
    });
    
  }
  
});



    
 
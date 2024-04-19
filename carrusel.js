document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.getElementById('carouselExampleFade');
    var iframes = carousel.querySelectorAll('iframe');
  
    carousel.addEventListener('slide.bs.carousel', function() {
      for(var i = 0; i < iframes.length; i++) {
        iframes[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  });
  
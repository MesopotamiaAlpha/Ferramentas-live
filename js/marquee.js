window.onload = function() {
    var lineHeight = document.querySelector(".marquee tbody").clientHeight;
    var viewHeight = window.innerHeight;
    var slider = document.querySelector(".marquee");
    var time = (slider.offsetHeight * 2.0 + viewHeight * 8) / 500.0; 
    
    slider.style.animationDuration = time + "s";
    }
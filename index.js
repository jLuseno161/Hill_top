var slideIndex = 1;
showSlides(slideIndex);

//next/previous
function loopSlides(n) {
    showSlides(slideIndex += n);
}

// image div controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var head = document.getElementById("ph_head");
    var gallery = document.getElementById("ph_photo");

    if (n > head.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = head.length
    }
    for (i = 0; i < head.length; i++) {
        head[i].style.display = "none";
    }

     
}
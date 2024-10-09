var slideIndex = [1, 1, 1]; // Initialize slide index for each project
var slideId = ["mySlides", "mySlides1", "mySlides2"]; // Classes for each project's slideshow

showSlides(1, 0); // Show first slide for English project
showSlides(1, 1); // Show first slide for Filipino project
showSlides(1, 2); // Show first slide for MAPEH project

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no); // Increment or decrement the slide index
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]); // Get the slides for the specific project
    if (n > x.length) {slideIndex[no] = 1} // Reset to first slide if exceeds
    if (n < 1) {slideIndex[no] = x.length} // Loop back to last slide if less than one
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  // Hide all slides
    }
    x[slideIndex[no]-1].style.display = "block";  // Show the current slide
}

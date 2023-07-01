// Array of image URLs
var images = ["1-bg.jpg", 
              "2-bg.jpg", 
              "3-bg.jpg"];
var index = 0;

function slideShow() {
  document.getElementById('slide').src = images[index];
  index++;
  if (index == images.length) { index = 0; }
}

// Change image every 2 seconds
setInterval(slideShow, 2000);

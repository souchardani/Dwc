var i = 0; //start point
var images = [];
var time = 3000; //mili seconds (3 seconds between each image))

// Image List
Images[0] = "img/1.jpg";
Images[1] = "img/2.jpg";
Images[2] = "img/3.jpg";
Images[3] = "img/4.jpg";

//Change Image
function changeImg() {
  //I can use document.slide or document.getElementById('slide') to get the image
  //document.slide works because I have an image tag with the name of slide
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

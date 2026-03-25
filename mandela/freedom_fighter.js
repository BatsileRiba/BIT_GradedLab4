var favouriteCount = 0;
var originalOrder = [];

window.onload = function() {

  var pics = document.getElementById("pics");
  var images = pics.querySelectorAll("img");

  for (var i = 0; i < images.length; i++) {
    originalOrder.push(images[i]);
    images[i].onclick = moveToFavourites;
  }

};

function moveToFavourites() {

  var img = this;
  var favourites = document.getElementById("favorites");
  var actionsList = document.getElementById("actions");

  favouriteCount++;
  document.getElementById("counter").textContent = "Remaining images: " + (6 - favouriteCount);

  favourites.appendChild(img);
  img.style.border = "3px solid green";

  var li = document.createElement("li");
  li.textContent = "Moved " + img.src + " to favorites";
  actionsList.appendChild(li);

  alert("Image " + img.src + " selected as favorite number " + favouriteCount);

  if (favouriteCount === 6) {
    alert("All images have been selected!");
  }



  img.onclick = revertImage;

}

function revertImage() {

  var img = this;
  var pics = document.getElementById("pics");
  var actionsList = document.getElementById("actions");

  favouriteCount--;
  document.getElementById("counter").textContent = "Remaining images: " + (6 - favouriteCount);
  img.style.border = "";

  var thisIndex = originalOrder.indexOf(img);
  var inserted = false;
  var currentImgs = pics.querySelectorAll("img");

  for (var i = 0; i < currentImgs.length; i++) {
    if (originalOrder.indexOf(currentImgs[i]) > thisIndex) {
      pics.insertBefore(img, currentImgs[i]);
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    pics.appendChild(img);
  }

  var li = document.createElement("li");
  li.textContent = "Reverted " + img.src + " back to the main list";
  actionsList.appendChild(li);

  img.onclick = moveToFavourites;

}
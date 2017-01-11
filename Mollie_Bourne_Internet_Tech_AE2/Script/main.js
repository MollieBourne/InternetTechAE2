//global var Index Page 

var image;
function main()
{
    image = document.getElementById("Pizza_on_plate");
	image.addEventListener("mouseover",mouseOver);
	image.addEventListener("mouseout", mouseOut); 
 
}

function mouseOver() {
 image. src= "image/PIZZA_ON_PLATE.jpg";
}
 

function mouseOut() {
  //update image src attribute here
  image.src="image/serving.jpg";
}


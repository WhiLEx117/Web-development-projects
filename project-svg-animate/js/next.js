const backBtn = document.getElementById("back"),
  imagen = document.getElementById("image"),
  nextBtn = document.getElementById("next");

let index = 0;
const ImageSources = ["/photos/1.png", "/photos/2.png", "/photos/3.jpg"];

function slider(currentIndex) {
  if (currentIndex > ImageSources.length - 1) {
    index = 0;
    return 0;
  }
  //:,v ta muy hardcore
  if (currentIndex < 0) {
    index = ImageSources.length - 1;
    return ImageSources.length - 1;
  }
  // console.log(ImageSources.length);

  return index;
}
// Me pregunto como magic piensa todo esto :o
function back() {
  --index;
  const newIndex = slider(index);
  const newImage = ImageSources[newIndex];
  imagen.src = newImage;
  console.log(index);
}

function next() {
  ++index;
  const newIndex = slider(index);
  const newImage = ImageSources[newIndex];
  imagen.src = newImage;
  // console.log(newImage, newIndex);
  console.log(index);
}
nextBtn.addEventListener("click", next);
backBtn.addEventListener("click", back);

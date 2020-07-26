const flipper = [
  "media/project-1/01.JPG",
  "media/project-1/02.JPG",
  "media/project-1/03.JPG",
  "media/project-1/04.JPG",
  "media/project-1/05.JPG",
  "media/project-2/01.JPG",
  "media/project-2/02.JPG",
  "media/project-2/03.JPG",
  "media/project-2/04.JPG",
  "media/project-3/01.JPG",
  "media/project-3/02.JPG",
  "media/project-3/03.JPG",
  "media/project-3/04.JPG",
  "media/project-3/05.JPG"
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(flipper);


const node = document.getElementById("flipper-fig");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.backgroundImage = `url(${image})`
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

$(document).ready(function(){
  cycleImages(flipper, node, 250)
});

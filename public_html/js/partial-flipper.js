const flipper = [
  "https://cdn.kalt.co/citrusstudio.no/sykle-uten-hender/01.jpg",
  "https://cdn.kalt.co/citrusstudio.no/sykle-uten-hender/02.jpg",
  "https://cdn.kalt.co/citrusstudio.no/sykle-uten-hender/03.jpg",
  "https://cdn.kalt.co/citrusstudio.no/sykle-uten-hender/04.jpg",
  "https://cdn.kalt.co/citrusstudio.no/sykle-uten-hender/05.jpg",
  "https://cdn.kalt.co/citrusstudio.no/for-the-bright-days/01.jpg",
  "https://cdn.kalt.co/citrusstudio.no/for-the-bright-days/02.jpg",
  "https://cdn.kalt.co/citrusstudio.no/for-the-bright-days/03.jpg",
  "https://cdn.kalt.co/citrusstudio.no/for-the-bright-days/04.jpg",
  "https://cdn.kalt.co/citrusstudio.no/for-the-bright-days/05.jpg",
  "https://cdn.kalt.co/citrusstudio.no/diawene/05.jpg",
  "https://cdn.kalt.co/citrusstudio.no/diawene/12.jpg",
  "https://cdn.kalt.co/citrusstudio.no/diawene/33.jpg)"
  "https://cdn.kalt.co/citrusstudio.no/diawene/24.jpg)"
  "https://cdn.kalt.co/citrusstudio.no/diawene/52.jpg)"
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

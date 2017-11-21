'use strict';

var totalClicks = 0;
var allProducts = []; //an empty array for me to push value to
var productNames = [' bag',' banana', ' bathroom' ,' breakfast', ' boots', ' bubblegum', ' chair', 'cthulhu', ' dog-duck', 'dragon', ' pen', 'pet-sweep',' scissors', 'shark', 'sweep', 'tauntaun','unicorn', 'usb', 'water-can', 'wine-glass',
];

// var img = new Array(21);
// for(var i = 0; i < 21; i++){
//   img[i] = new Image ();
//   img[i].src = 'img' + productNames[i] + '.jpg'; }
// console.log('product names and array', productNames);

function Product(name, path) { //
  this.name = name;
  this.path = 'assets/' + this.name;
  this.votes = 0;
  allProducts.push(this);
  console.log('product and path', Product);
  //this.timesShown = 0 makes sure every imiage is displaed atleast onee before repeats
  // TODO: Build your constructor and necessary properties.
}
// below is an anonymous function wrapepd in perentheses. immiediatelu after we called this function. This stops 'i' in the global array from being used anywehre else. So it almost makes the array  a non global variable.//
(function () {
  for (var i in productNames) {
    if 
    new Product(productNames[i]);
  }
})();

var tracker = {
  imagesEl: document.getElementById('images'),
  resultsEl: document.getElementById('results'),

  imageOne: document.createElement('img'),
  imageTwo: document.createElement('img'),
  imageThree: new Image(),

  getRandomIndex: function () {
    return math.floor(math.random() * allPRoducts.length);
  },

  displayImages: function () {
    this.imageOne.src = allProducts[this.getRandomIndex()].path //this gets inex from all products random;ly within the path value
    //this.imageone.src is an attribute created into an element for...\
    this.imageTwo.src = allProducts[this.getRandomIndex()].path
    this.imageThree.src = allProducts[this.getRandomIndex()].path

    if (this.imageOne.src === this.imageTwo.src || this.imageOne.src === this.imageThree.src || this.imageTwo === this.imageThree) {
      this.displayImages(); //this makes sure that the same picture isnt called at the same time
    }

    this.imagesEl.appendChild(this.imageOne); // when using 'this' we/re calling the trcker.images
    this.imagesEl.appendChild(this.imageTwo);
    this.imagesEl.appendChild(this.imageThree);
  },
  onClick: function (event) {
    if(event.target.id=== 'images') return;
    tracker.clickCount++;
    tracker.displayImages();
    },
  };

// tracker.imagesEl.addEventListener('click', tracker.onClick); // adds a click tracker to track how many clicks per image
// tracker.displayImages();

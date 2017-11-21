'use strict';

var totalClicks = 0;
var allProducts = [];
var productNames = [' bag',' banana', ' bathroom' ,' breakfast', ' boots', ' bubblegum', ' chair', 'cthulhu', ' dog-duck', 'dragon' ' pen', 'pet-sweep',' scissors', 'shark', 'sweep', 'tauntaun','unicorn', 'usb', 'water-can', 'wine-glass',
];
// TODO: see the pattern here, and what you need to fill in?
var img = new Array(21);
for(var i = 0; i < 21; i++){
  img[i] = new Image ();
  img[i].src = 'img' + productNames[i] + '.jpg'; }


function Product(name, path) {
  this.productNames = name;
  this.path = path;
  // TODO: Build your constructor and necessary properties.
}
console.log('product and path', product);

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.

  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.
  getRandomIndex: function() {
      var randomImages = [];
      var temp = arr.slice();
      for (var i = 0; i<count; i++){
        var index = Math.ceil(Math.random() * 10) % _tmp.length;
        result.push(_tmp.splice(index, 1)[0]);
      }
      return result;

    },

    // TODO: Hmm... what's going to happen here?
  },

  displayImages: function() {
    var num = Math.floor(Math.random());
     document.getElementById (Array [num]);
    // TODO: Hmm... what's going to happen here?
var getNum = document.getElementById('num');
  getNum.textContent = num;
  },
updateMessage()l; //I used the above variable getNum and code from example from page 89 in javascript book
  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
    totalClicks++;
    window.document.ButtonForm.myButton.value='Clicked' + totalClicks + 'times';
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
    prototype.randomImages ();
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
document.
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();

//use strict
'use strict';
var stores = [];

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','Total'];

function Store (id, min, max, avg){
  this.id = id;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.getHourlyCookies();
}
console.log(Store);

Store.prototype.randomCust = function () {
  return getRandomNum(this.min, this.max);
};

Store.prototype.getHourlyCookies = function() {
  for(var i = 0 ; i < hours.length; i++) {
    this.hourlyCookies.push(Math.floor(this.randomCust() * this.avg));
    this.dailyTotal += this.hourlyCookies[i];
  }
  return this.getHourlyCookies;
};

new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 26, 1.2);

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

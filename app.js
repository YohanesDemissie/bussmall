'use strict';

//var totalClicks = 0;
var allProducts = []; //an empty array for me to push value to
var productNames = ['bag', 'banana', 'bathroom', 'breakfast', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun','unicorn', 'usb', 'watercan', 'wineglass',
];

function Product(name) {
  this.name = name;
  this.path = 'assets/' + this.name + '.jpg';
  //adds jpg to prduct name to pull its image
  this.votes = 0;
  allProducts.push(this);
  console.log('product and path', Product);
  this.timesShown = 0;// makes sure every imiage is displaed atleast onee before repeats
  // Build your constructor and necessary properties.
}
// below is an anonymous function wrapepd in perentheses. immiediatelu after we called this function. This stops 'i' in the global array from being used anywehre else. So it almost makes the array  a non global variable.//
(function () {
  for (var i in productNames) {
    new Product(productNames[i]);
  }
})();


var tracker = {
  imagesEl: document.getElementById('images'),
  resultsEl: document.getElementById('results'),
  clickCount: 0,

  //the tracker keeps tabs of how many times the image element is clicked

  imageOne: document.createElement('img'),
  imageTwo: document.createElement('img'),
  imageThree: document.createElement('img'),

  getRandomIndex: function () {
    return Math.floor(Math.random() * allProducts.length);
  },

  displayImages: function () {
    var idOne = this.getRandomIndex();
    var idTwo = this.getRandomIndex();
    var idThree = this.getRandomIndex();
    // the above code changes the elment ID's to pull random images from the array above so there are minimal repeats
    if (idOne === idTwo || idOne === idThree || idTwo===idThree) {
      this.displayImages ();
      return;
      //the above code makes sure the three images we will be displahing are NEVER the same
    }
    // my code below vs Scotts code above

    this.imageOne.src = allProducts[idOne].path;
    this.imageTwo.src = allProducts[idTwo].path;
    this.imageThree.src = allProducts[idThree].path; //this gets inex from all products randomly within the path value
    //this.imageone.src is an attribute created into an element for...\
    this.imageOne.id = allProducts[idOne].name;
    this.imageTwo.id = allProducts[idTwo].name;
    this.imageThree.id = allProducts[idThree].name;

    this.imagesEl.appendChild(this.imageOne); // when using 'this' we/re calling the trcker.images
    this.imagesEl.appendChild(this.imageTwo);
    this.imagesEl.appendChild(this.imageThree);
  },
  onClick: function (event) {
    console.log(event.target.id);
    if (tracker.clickCount === 24) {
      tracker.imagesEl.removeEventListener('click', tracker.onClick);
      // below trying to push all products output into local storage//
      // localStorage.setItem('allProducts');
      allProducts.push(JSON.parse(localStorage.getItem('allProducts')));
      //code works with just the code below. can explore or delete code above
      localStorage.setItem('allProducts', JSON.stringify(allProducts));

      var ctx = document.getElementById('myChart').getContext('2d');
      //below is the graph code
      var options = {
        type: 'bar',
        data: {
          labels: allProducts.map(function(x) {return x.name;}),
          datasets: [{
            label: '# of Votes',
            data: allProducts.map(function(x) {return x.votes;}),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      };
      var myChart = new Chart(ctx, options);
      console.log('my graph', myChart);
    }
    else if (event.target.id === 'images'){
      console.log('didnt click an image');
      return;
    } else {
      tracker.clickCount++;
    }

    for (var i in allProducts) {
      if (event.target.id === allProducts[i].name) {
        allProducts[i].votes++;
      }
    }
    tracker.displayImages();
  }
  // onClick: function (event) {
  //   if(event.target.id === 'images') {
  //     return;
  //   } else {
  //     tracker.clickCount++;
  //
  //     for (var i in allProducts) {
  //       if(event.target.id === allProducts[i].name) {
  //         allProducts[i].votes++;
  //       }
  //     }
  //     tracker.displayImages();
  //   }

};
tracker.imagesEl.addEventListener('click', tracker.onClick);
tracker.displayImages();


// tracker.imagesEl.addEventListener('click', tracker.onClick); // adds a click tracker to track how many clicks per image
// tracker.displayImages();

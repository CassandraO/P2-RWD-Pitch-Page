// My Scripts
// Store Messages
var msg0 = 'Hello!';
var msg1 = 'Welcome!';
var msg2 = 'Good Day!';

// Get Random Number
var numRand;
var max = 3;

numRand = Math.floor(Math.random() * max);

console.log(numRand);

// Display Random Messages
$('h1').text( eval('msg' + numRand));

// read more
$('article').readmore({
    
      speed: 1500,
  moreLink: '<a href="#">Read More</a>',
  lessLink: '<a href="#">Hide</a>'
    
});
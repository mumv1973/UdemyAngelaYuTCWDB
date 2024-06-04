// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//   var bottleWord = "bottles";
//   if (numberOfBottles === 1) {
//     bottleWord = "bottle";
//   }
//   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//   console.log(numberOfBottles + " " + bottleWord + " of beer,");
//   console.log("Take one down, pass it around,");
//   numberOfBottles--;
//   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


function fibonacciGenerator(n) {
var output = [];
if (n === 1) {
  output = [0];
} else if (n === 2) {
  output = [0, 1];
} else {  
  output = [0, 1];
  for (var i = 2; i < n; i++) {
    output.push(output[output.length - 1] + output[output.length - 2]);
  }
}
return output;
}

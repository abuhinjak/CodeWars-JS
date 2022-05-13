/******************************* Even Or Odd **************************************
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//////////// Solutions ////////////////

// 1.
const evenOdd = (n) => n % 2 ? "Odd" : "Even";


// 2.
/*
function evenOdd(n) {
  if(n % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
*/


console.log(evenOdd(5));

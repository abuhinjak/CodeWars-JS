/******************************* ARRAY.DIFF **************************************
Your goal is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


/////////////////////////  Solutions  /////////////////////////

// 1.


const arrayDiff = (a, b) => a.filter(value => !b.includes(value));


// 2.

/*
const arrayDiff = (a, b) => {
  for(i = 0; i < a.length; i++ ) {
    if(b.indexOf(a[i]) !== -1) {
      a.splice(i, 1);
      i--;
    }
  }

  return a;
}
*/


console.log(arrayDiff([1,2,2,2,3],[3]));
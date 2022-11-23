// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
    /*
    Pseudocode:

    Copy the original array
    Create an array to store the sorted values
    While the array is not empty:
    - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    - Pop a value from the array
    - Create a new spot at the end of the array with null to help with comparisons
    - Walk through the sorted array in reverse order
    - Check if the value to the left is smaller than the new value
    - If so, you've reached the insertion point so exit the loop
    - If not shift the value to the right by 1 and continue
    - Insert the unsorted value at the break point
    Return the sorted array
    */

    // Your code here
    let copyArr = arr.slice(); //[4, 6, 1, 5, 3, 5];
    let sorted = [copyArr.shift()] // [4]
    while (copyArr.length) {

      let curr = copyArr.shift(); // [6]
      sorted.unshift(`null`); // [null, 4]
      console.log(sorted.join(','))
      for (let i = 0; i < sorted.length; i++) {
        // if at the end of loop [- OR -]  if the value after null is greater than curr
        if (i === sorted.length - 1 || sorted[i + 1] > curr) {
          // replace null with curr
          console.log(sorted.join(','))
          sorted[i] = curr;
          console.log(sorted.join(','))
          break;                                  // breaks for internal for loop and returns to while loop
        }
        [sorted[i + 1], sorted[i]] = [sorted[i], sorted[i + 1]]; //[null, 4] => [4, null]
        console.log(sorted.join(','))
      }
    }
    return sorted;
  }

  let arr1 = [4, 6, 1, 9, 5, 3, 5];
  console.log(insertionSort(arr1));

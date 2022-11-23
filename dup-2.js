function insertionSortInPlace(arr) {
    /*
    Pseudocode:
    Set a pointer dividing the array into sorted and unsorted halves
    Repeat while the unsorted half is not empty:
    - make sure you have a console.log(arr.join(',')) as your first line in the while loop
    - Grab the first value from the unsorted half
    - For each value starting from the divider,
    - Check if the value to the left is smaller than the unsorted value
    - If so, you've reached the insertion point so exit the loop
    - If not shift the value to the right by 1 and continue
    - Insert the unsorted value at the break point
    - Increment the dividing pointer and repeat
    Return the mutated array
    */
    let divider = 0;  //aka pointer
    // [4, 6, 1, 5, 3, 5]
    while (divider <= arr.length - 2) {
      temp = arr[divider]; // 4



      for (let i = divider; i >= 0; i--) { // [4, 6, 1] ... temp = 1

        if (i === 0) {
          arr[i] = temp;
          console.log(arr.join(","))
        }


        else if (arr[i - 1] > temp) {
          arr[i] = arr[i - 1];
          console.log(arr.join(","))
        }

        else if (arr[i - 1] < temp) { // 2 < 3 ?
          arr[i] = temp;
          console.log(arr.join(","))
          break;
        }
      }

      divider++;
    }

    if (arr[arr.length -2] > arr[arr.length -1]){
           [arr[arr.length -1], arr[arr.length -2]] = [arr[arr.length -2], arr[arr.length -1]]
    }

    return arr;
  }


let arr1 = [4, 6, 1, 5, 3, 5];
console.log(insertionSortInPlace(arr1));

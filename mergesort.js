function mergeSort(array) {


  if (array.length === 1) {
    console.log('here')
    return;
  }

//   mergeSort(split(array))
//   merge(array)



}

function merge(arr) {
  var newArr = [];
  var pt1 = 0;
  var pt2 = 0;
  var arr1 = arr[0]
  var arr2 = arr[1]

  while (newArr.length < arr1.length + arr2.length) {
    if (arr1[pt1] === undefined) {
      newArr.push(arr2[pt2]);
      pt2 += 1
    } else if (arr2[pt2] === undefined) {
      newArr.push(arr1[pt1]);
      pt1+= 1
    }
    if (arr1[pt1] > arr2[pt2]) {
      newArr.push(arr2[pt2]);
      pt2 += 1;
    } else if (arr1[pt1] < arr2[pt2]) {
      newArr.push(arr1[pt1]);
      pt1 += 1;
    }
  }

  return newArr;
}

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  var midPoint = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, midPoint);
  var secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

//   console.log(mergeSort([1,2,3,4,5,6]))
// console.log(merge([[1],]))

console.log(mergeSort([1, 4, 7, 3, 6, 8]));



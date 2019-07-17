function bubbleSort(array) {
    var sorted = false;;

while(!sorted) {
    sorted = true;

    for (let i = 0; i < array.length; i++) {

        if (array[i + 1] < array[i]) {
    
            var temp;
            temp = array[i+1];
            array[i+1] = array[i];
            array[i] = temp;
            sorted = false;
        }
      }
}
  return array;
}



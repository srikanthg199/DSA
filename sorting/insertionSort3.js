const array = [5, -1, 99, 44, 6, 2, 1, 4, 0]
function insertionSort (array) {
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        //to shift elements to the right until we find the correct position for the key
        for (let j = i - 1; array[j] > key && j >= 0; j--) {
            array[j + 1] = array[j]
        }
        // Place the key in its correct position
        array[j + 1] = key;
    }
}
insertionSort(array)
console.log(array);

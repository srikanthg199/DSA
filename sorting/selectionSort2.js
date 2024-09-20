const array = [5, -1, 99, 44, 6, 2, 1, 4, 0]
function selectionSort (array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i], minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        array[i] = array[minIndex]
        array[minIndex] = min;
    }
}
selectionSort(array)
console.log(array);

const array = [5, -1, 99, 44, 6, 2, 1, 4, 0]
function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}
bubbleSort(array)
console.log(array);

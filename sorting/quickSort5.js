/* 
Rearrange the elements of an array such that, for a selected element (pivot),
all elements smaller than the pivot are moved to the left, and
all elements greater than the pivot are moved to the right.\\

Best Case Time Complexity: O(n log n)
Worst Case Time Complexity: o(n ^ 2)
Average Case Time Complexity: O(n log n)
Space Complexity:
Best/Average Case: O(log n)
Worst Case: O(n) (due to recursion stack in worst-case scenarios)

*/
function pivot (array, start = 0, end = array.length - 1) {
    function swap (array, i, j) {
        [array[i], array[j]] = [array[j], array[i]]
    };
    // We are assuming the pivot is always the first element
    let pivot = array[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i)
        }
    }
    // Swap the pivot from the start the swapPoint
    swap(array, start, swapIndex);
    return swapIndex;
}

function quickSort (array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        // For left
        quickSort(array, left, pivotIndex - 1);
        // For Right
        quickSort(array, pivotIndex + 1, right)
    }
    return array;
}

const array = [4, 8, 2, 1, 5, 7, 6, 3]
console.log(quickSort(array));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

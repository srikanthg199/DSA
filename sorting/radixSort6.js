/*RADIX SORT BIG O
Time Complexity
(Best)  (Average)  (Worst)
 O(nk)    O(nk)     O(nk) 
Time Complexity
O(n + k)
• n - length of array
• k - number of digits(average)
*/
function getDigit (num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount (num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits (nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

function radixSort (nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

const array = [1, 345, 2, 3489, 45, 9566, 98]

console.log(radixSort(array));
// console.log(Array.from({ length: 5 }, () => []));
// const a = Array.from({ length: 5 }, () => []);
// a[0].push(100);
// console.log(a);




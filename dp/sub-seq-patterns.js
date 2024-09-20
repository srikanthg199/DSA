// Print all sub-sequences
function subSeq (array, index = 0, curr_seq = []) {
    if (index >= array.length) {
        console.log(/c/, curr_seq)
        return;
    }
    curr_seq.push(array[index]);
    subSeq(array, index + 1, curr_seq);
    curr_seq.pop();
    subSeq(array, index + 1, curr_seq)
}

// const array = [3, 1, 2]
// subSeq(array);

const sum = 2;
const array = [1, 2, 1];

function subSeqWithKSum (temp_sum = 0, index = 0, curr_seq = []) {
    if (index === array.length) {
        if (temp_sum === sum) {
            console.log(curr_seq)
        }
        return;
    }
    // Include the current element in the subsequence
    curr_seq.push(array[index])
    temp_sum += array[index];
    subSeqWithKSum(temp_sum, index + 1, curr_seq);
    // Backtrack: exclude the current element from the subsequence
    curr_seq.pop()
    temp_sum -= array[index];
    subSeqWithKSum(temp_sum, index + 1, curr_seq);
}

// Early return if sequence found
function subSeqWithKSum1 (temp_sum = 0, index = 0, curr_seq = []) {
    // Base case: if we reach the end of the array
    if (index === array.length) {
        if (temp_sum === sum) {
            return curr_seq;  // Return the subsequence if the sum is equal to the target
        }
        return null;  // If the sum is not equal, return null
    }
    // Include the current element in the subsequence
    curr_seq.push(array[index]);
    temp_sum += array[index];
    const data = subSeqWithKSum1(temp_sum, index + 1, curr_seq);
    if (data) return data;  // If a valid subsequence is found, return it
    // Backtrack: exclude the current element from the subsequence
    curr_seq.pop();
    temp_sum -= array[index];
    return subSeqWithKSum1(temp_sum, index + 1, curr_seq);
}

function subSeqWithKSumCount (temp_sum = 0, index = 0) {
    // Base case: if we reach the end of the array
    if (index === array.length) {
        return temp_sum === sum ? 1 : 0;
    }
    // Include the current element in the subsequence
    temp_sum += array[index];
    let left = subSeqWithKSumCount(temp_sum, index + 1);
    // Backtrack: exclude the current element from the subsequence
    temp_sum -= array[index];
    let right = subSeqWithKSumCount(temp_sum, index + 1);
    // Return the total count from both including and excluding the current element
    return left + right;
}
// subSeqWithKSum() // 1st
// const result = subSeqWithKSum1(); // 2nd
// console.log(result ? result : "No subsequence found");
// const result = subSeqWithKSumCount(); //3rd
// console.log("Number of subsequences with sum =", sum, "is", result);

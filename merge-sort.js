// Recursively divides the array into halves until they reach a length of 1 or 0
export function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

// Merges sortedLeft and sortedRight into a single sorted array

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare elements from both arrays and push the smaller one
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate any remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}
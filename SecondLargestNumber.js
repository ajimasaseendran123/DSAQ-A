let arr = [1,10,20,20];

function findSecondLargestNumber(arr) {
    let largestNum=-Infinity;
    let secondLargestNum=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largestNum){
            // Update second largest before updating largest 
            //if we get the new largest number we will update the second largest with the previous largest
            secondLargestNum = largestNum;
            largestNum = arr[i]
        }else if(arr[i] > secondLargestNum && arr[i] != largestNum){
            // Update second largest if the current number is less than largest but greater than second largest
            secondLargestNum =arr[i] 
        }
    }
    return secondLargestNum;
}

let result = findSecondLargestNumber(arr);
console.log(result);


// corner cases of this solutions
// 1. If the array has only one element, there is no second largest number.
// 2. If all elements are the same, there is no second largest number.
// 3. If the array is empty, there is no second largest number.
// 4. If the array has negative numbers, the second largest number can also be negative
// 5. If the array has duplicate elements, the second largest number should be unique.
// 6. If the array has only two elements, the second largest number is the smaller of the two.
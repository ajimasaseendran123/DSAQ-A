let arr = [1,3,4,2,5,3,45,3,43,34,232];

function findSecondLargestNumber(arr) {
    let largestNum=-Infinity;
    let secondLargestNum=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largestNum){
            // Update second largest before updating largest 
            //if we get the new largest number we will update the second largest with the previous largest
            secondLargestNum = largestNum;
            largestNum = arr[i]
        }else if(arr[i] > secondLargestNum){
            // Update second largest if the current number is less than largest but greater than second largest
            secondLargestNum =arr[i] 
        }
    }
    return secondLargestNum;
}

let result = findSecondLargestNumber(arr);
console.log(result);

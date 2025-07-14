let arr = [21,23,3,4,5666,-8];

function findlargestNumber(arr) {
    // Initialize to negative infinity to handle negative numbers 
    //if we have all negative numbers and we initialize to 0, it will return 0 as largest number
    //if we have all positive numbers, it will return the largest positive number
    //to handle both cases, we start with negative infinity
    //this way, it will always find the largest number in the array
    let largestNum=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(largestNum<arr[i]){
            largestNum = arr[i]
        }
    }
    return largestNum;
}

let result = findlargestNumber(arr);
console.log(result);

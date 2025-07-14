let arr = [-21,-23,-3,-4,-5666,-8];

function findSmallestNumber(arr) {
    //initalize the smallest number with Infinity
    //this is because we want to find the smallest number even if we have negative numbers
    //if we initialize with 0 or -Infinity, it will not work correctly
    let smallestNum=Infinity;
    for(let i=0;i<arr.length;i++){
        if(smallestNum>arr[i]){
            smallestNum = arr[i]
        }
    }
    return smallestNum;
}

let result = findSmallestNumber(arr);
console.log(result);

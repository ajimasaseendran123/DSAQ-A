let arr = [21,23,3,4,5666,-8];

function findlargestNumber(arr) {
    let largestNum=0;
    for(let i=0;i<arr.length;i++){
        if(largestNum<arr[i]){
            largestNum = arr[i]
        }
    }
    return largestNum;
}

let result = findlargestNumber(arr);
console.log(result);

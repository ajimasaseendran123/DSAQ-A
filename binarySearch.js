
function binarySearch(arr,target){
    // console.log(arr,target)
    let leftPt = 0;
    let rightPt = arr.length;
    while(rightPt>leftPt){//this is the base case if the condition is rightPt>leftPt - this condition willnot work for an array with one element
        let mid = Math.floor(leftPt+rightPt)/2;
        if(target === arr[mid]){
            return mid;
        }
        else if(target >arr[mid]){
            leftPt = mid+1;
        }else{
            rightPt = mid-1;
        }
    }
    return "no value found"
}
let arr =[2,4,5,6,7,3,8]
let target = 5;
let result = binarySearch(arr,target);
console.log(result)
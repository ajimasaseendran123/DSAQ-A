
function linearSearch(arr,target){
    // console.log(arr,target)
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target)return i;
    }
    return "no value found"
}
let arr =[2,4,5,6,7,3,8]
let target = 10;
let result = linearSearch(arr,target);
console.log(result)
// Output: no value found
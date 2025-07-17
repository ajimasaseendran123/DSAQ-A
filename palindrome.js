let n=1234;
let temp=n;
let reverse = 0;
while(n>0){
    let last_digit = n%10;
    reverse = (reverse*10)+last_digit;
    n=Math.round(n/10);
}
if(temp === reverse){
    console.log("its palindrome");
}else{
    console.log("its not palindrome")
}
console.log(reverse);


//optimise your code
//check for negative numbers , a negative number cannot be a palindrome, so if 
//n is negative //we can directly return false
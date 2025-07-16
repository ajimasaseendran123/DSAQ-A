let n=10;
for(let i=0;i<n;i++){
    let row = "";
    for(let j=0;j<n;j++){
        if(j>=n-(i+1)){
            row=row+"*";
        }else{
            row=row+" ";
        }
    }
    console.log(row)
}

//output
//         *
//        **
//       ***
//      ****
//     *****
//    ******    
//   *******
//  ********

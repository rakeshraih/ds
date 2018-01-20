'use strict';
console.clear();
let counter=0;

String.prototype.repeatNew=(n,strOriginal)=>{
  let str='';  
  for(let i=0;i<n;i++){
    str+=strOriginal;
    ++counter;
  }
  return str;  
}

console.log('For loop---'+'ssasa'.repeatNew(10,'ssasa')+'--'+counter);
counter=0;

String.prototype.repeat1=(n,strOriginal)=>{
  ++counter;
  if(n==1){
      return strOriginal;
   } 
  return strOriginal+strOriginal.repeat1(n-1,strOriginal);
}

console.log('Recursion--'+'ssasa'.repeat1(3,'ssasa')+'--'+counter);
counter=0;

let strDevide='a';

function devide(length){
  
  if(length < 2){
     return strDevide;
  }else{
    let mid = Math.floor(length/2);
    return conquer(devide(mid),devide(length-mid));
  }
  
}


function conquer(left,right){  
  ++counter;
  return left+right;
}

console.log('Merge Imp---'+devide(3)+'--'+counter);
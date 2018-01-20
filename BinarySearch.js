console.clear();
let a=[119,11,8,7,9,3,3,3,19,1,3,3,3,33,3,3];
a=a.sort();
let left =0;
let right = a.length -1;
let foundIndex=-1;
const searchKey=19;
let splitcount=0;
//debugger;
while(left <= right){
  let mid = Math.round((right+left)/2);
  if(a[mid]==searchKey){
     foundIndex=mid;
     break;
  }else if(a[mid] > searchKey){
     left = mid+1;
  }else{
     right = mid-1;
  }
  splitcount++;
}

if(foundIndex!=-1){
  console.log('Found at '+foundIndex);
}else{
  console.log('Not Found');
}
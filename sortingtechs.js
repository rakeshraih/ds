console.clear();
let a=[9,7,0,1,3,5,4,8,6,2];

// Bubble sort
for(let i=0; i<a.length;i++){
  for(let j=0; j<a.length;j++){
       if(a[i] < a[j]){
          let temp = a[j];
           a[j]= a[i];
           a[i] = temp;
          }
  }
}

a=[9,7,0,1,3,5,4,8,6,2];

// Selection sort
for(let i=0; i<a.length;i++){
  let smallIndex = i;
  for(let j=i; j<a.length;j++){
       if(a[smallIndex] > a[j]){
          smallIndex = j
      }
  }
  let temp = a[i];
  a[i] = a[smallIndex];
  a[smallIndex]=temp;
}


// Insertion sort
for(let i=1; i<a.length;i++){
  let index = i;
  while(index > 0 && a[index] < a[index-1]){
    let temp = a[index];
    a[index] = a[index-1];
    a[index-1]=temp;
    index--;
  }
  
}

a=[9,7,0,1,3,5,4,8,6,2];
//Merge sort

function devide(array){
  
  if(array.length < 2){
     return array;
  }else{
    let mid = Math.floor(array.length/2);
    let leftArray = array.slice(0,mid);
    let rightArray = array.slice(mid-1);
    return conquer(devide(leftArray),devide(rightArray));
  }
  
}

function conquer(leftArray,rightArray){
  
  let lLength = leftArray.length;
  let rLength = rightArray.length;
  let j=0,i=0;
  let result=[];
  
  while(i < lLength && j < rLength){
        if(leftArray[i] < rightArray[j]){
           result.push(leftArray[i++])
         }else{
           result.push(rightArray[j++])
         }
   }
  
  return result.concat(leftArray.slice(i)).concat(rightArray.slice(j));
  
}

console.log('Merge sort--'+devide(a));

console.clear();

// Quick sort

function partision(a,start,end){
  let pivot = a[end-1];
  let i=start -1; 
  
  for(let j = start; j < end; j++){
    //swap with i, i is the position wher as j traverse the list
    if(a[j] < pivot){
       let temp = a[++i];
       a[i] = a[j];
       a[j] = temp;
     }
    
  }
   //swap the pivot with i,actual position
    let temp = a[++i];
    a[i] = a[end-1];
    a[end-1]= temp;
  
  return i;
}

function QuickSort(array,left,right){
  if(left < right){
       let pivotIndex= partision(array,left,right);
       QuickSort(array,left,pivotIndex-1);
       QuickSort(array,pivotIndex+1,right);
  }
  
  return array;
}
a= [9,6,5,0,8,2,0,1];

console.log(QuickSort(a,0,a.length));
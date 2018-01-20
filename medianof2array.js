
let array1=[1,2,3,4,5];
let array2=[6,7,8,9,10];

console.clear();
array1.push(...array2);
let newArray= array1.sort();
console.log(newArray);

let n = array1.length;

if(n%2==0){
  
   console.log(n/2+'--'+((n/2)-1)+'----'+(newArray[n/2]+newArray[(n/2)-1])/2);
}else{
  console.log(Math.floor(n/2)+'----'+newArray[Math.floor(n/2)]);
}

console.clear();

let a=[1,2,3,4,5,6];
let b =[0,0,0,0,10,10];

function findMedian(newArray){
  let n = newArray.length;
  if(n%2==0){
     return (newArray[n/2]+newArray[(n/2)-1])/2;
  }else{
    return newArray[Math.floor(n/2)];
  }
}

let median;
let run = 0;
while(true){
    let l1 = a.length;
    let l2 = b.length;
     
     if(l1==1){
         median = (a[0]+b[0])/2
         break;
      }else if(l1==2){
          median = (Math.max(a[0],b[0])+Math.min(b[1],a[1]))/2;   
         break;
      }else{
        //debugger;
        let m1=findMedian(a);
        let m2=findMedian(b);
        if(m1 === m2){
           median = m1;
           break; 
         }else if(m1 > m2){ 
           a.splice(Math.ceil(a.length/2)+(a.length%2===0?1:0),a.length);
           b.splice(0,Math.floor(b.length/2)-(b.length%2===0?1:0));
        }else{
           a.splice(0,Math.floor(a.length/2)-(a.length%2===0?1:0));
           b.splice(Math.ceil(b.length/2)+(a.length%2===0?1:0),b.length);
        }
        
      }
  
       console.log(a+','+b);
  
    run++;
}

console.log('median--'+median);
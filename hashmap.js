console.clear();
var hash=function(str,size){
  let hash=0;
  for(let i=0;i<str.length;i++){
    hash+=str.charCodeAt(i);
  }
  return hash%size;
}

let HashTable=function(){
  let storage=[];
  let maxLength=4;
  
  this.print=()=>{console.log(storage)};
  this.add=(key,val)=>{
    let hashVal = hash(key,maxLength);
    if(!storage[hashVal]){
       storage[hashVal]=[[key,val]];
     }else{
       let indexVal = storage[hashVal];
       indexVal.push([key,val]);
     }
  };
  this.find=(key,val)=>{
    let hashVal = hash(key,maxLength);
    let indexVal = storage[hashVal];
    //debugger; 
    if(!indexVal){
       return null;
     }else if(indexVal.length==1){
       return indexVal[0][0]===key?indexVal[0]:null;
     }else{
       //debugger;
       return indexVal.find((val)=>{ return val[0]===key;})
     }
  };

}


let hashTable = new HashTable();
hashTable.add('abc','value');
hashTable.add('bca','value');
hashTable.add('acb','value');
hashTable.add('key4','value');
hashTable.add('key5','key5');

hashTable.print();
console.log(hashTable.find('acb'));
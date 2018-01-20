console.clear();
let mySet=function(){
  this.values=[];
  this.length=0;
  
  this.has=function(val){
    return this.values.indexOf(val) != -1;
  }
  
  this.add=function(val){
    if(!this.has(val)){
       this.values.push(val);
    }
  } 
  this.union=function(set){
    //debugger;
    let newMap = new mySet();
    let firstSet = this.values;
    let secondSet = set.values;
    
    firstSet.forEach((value,index,arr)=>{newMap.add(value)});
    secondSet.forEach((value,index,arr)=>{newMap.add(value)})
    return newMap;
  },
this.intersection=function(set){
    let newMap = new mySet();
    this.values.forEach((value,index,arr)=>{ if(set.has(value))       {newMap.add(value);}})
    return newMap;
  }
  
}

let set1 = new mySet();
set1.add(1);set1.add(2);set1.add(3);
let set2 = new mySet();
set2.add(4);set2.add(5);set2.add(3);
console.log(set1.union(set2));
console.log(set1.intersection(set2));
console.log(set1);
console.log(set2);

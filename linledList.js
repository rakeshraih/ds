console.clear();

function Node(value){
  this.value=value;
  this.next=null;
}


function LinkedList(value){
  this.length=0;
  this.head=null;
  
  this.add=function(value){
    let node = new Node(value);
    this.length++;
    if(this.head==null){
       this.head = node;
    }else{
       
        let currentPointer = this.head;
      
        while(currentPointer.next){
              currentPointer = currentPointer.next;
        }
       
        currentPointer.next = node;
       }
  },
  this.delete=function(value){

        let currentPointer = this.head;
        let prevNode = null; 
       // debugger;
    
        while(currentPointer){
              if(currentPointer.value===value){
                
                 
                 if(prevNode==null){
                    this.head=currentPointer.next;
                 }else if(currentPointer.next){
                    prevNode.next = currentPointer.next;
                  }else{
                    prevNode.next=null;
                  }
                 break;
               }
         prevNode = currentPointer;
         currentPointer = currentPointer.next;
        }       
  },
  this.search=function(value){

        let currentPointer = this.head;
        let foundIndex = 0;
        while(currentPointer){
              if(currentPointer.value===value){
                 return ++foundIndex;
               }
          currentPointer = currentPointer.next;
          foundIndex++;
        }   
    
    return -1;
  },
      this.reverse=function(){

        let currentPointer = this.head;
        let previous = null;
        
        while(currentPointer){
         let localNode = currentPointer.next;
          currentPointer.next = previous;
          debugger;
          previous = currentPointer;
          currentPointer = localNode;
        }   
    
    return previous;
  }
    
}

let ll= new LinkedList();
console.log(ll);
ll.add(1);ll.add(2);ll.add(3);ll.add(4);
console.log(ll.reverse('hi'));
console.log(ll.search('hi1'));

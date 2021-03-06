console.clear();

function Node(i){
  this.value=i;
  this.left=null;
  this.right=null;
}

function BST(){
  this.root=null;
  this.add=function(i){
    let newNode = new Node(i);
    if(this.root){
       this.insertToNode(newNode,this.root);
     }else{
       this.root=newNode;
     }
  };
   this.find=function(i){
    return i;
  };
  this.insertToNode=function(newNode,insertNode){

    
    while(insertNode){
      if(newNode.value > insertNode.value){
             if(!insertNode.right){
               insertNode.right = newNode
               break;
             }
        
            insertNode = insertNode.right;

       }else if(newNode.value <= insertNode.value){
              if(!insertNode.left){
               insertNode.left = newNode;
               break;
             }
             insertNode = insertNode.left;
       }
     
    }
  };
}

var bst=new BST();
bst.add(10);
bst.add(11);
bst.add(5);
bst.add(4);
bst.add(6);
bst.add(15);
console.log(bst.root);
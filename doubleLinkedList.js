console.clear();

function Node(i){
  this.value=i;
  this.prev=null;
  this.next=null;
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
  
  this.insertToNode=function(newNode,insertNode){

    //debugger;
    while(newNode){
      if(!insertNode.next){
          insertNode.next = newNode;
          newNode.pre = insertNode;
          break;
       }
       insertNode = insertNode.next;
    }
    
  };
  
  this.showBST=function(){
    console.log(this.root.value);
    this.root.visited=true;
    var dfs=true;
    this.print(this.root,dfs);
  };
  
   this.print=function(node,dfs){
    if(node.left){
       this.print(node)
     }else{
       console.log('/');
       console.log(node.value);
    }
  }
}

var bst=new BST();
bst.add(10);
bst.add(11);
bst.add(5);
bst.add(4);
bst.add(6);
bst.add(15);
console.log(bst.root);
let node=root;
while(root.next){
  let node = root
}
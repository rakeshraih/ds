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
    if(newNode.value > insertNode.value){
          if(insertNode.right){
            this.insertToNode(newNode,insertNode.right);
           }else{
             insertNode.right=newNode;
           }
     }else{
          if(insertNode.left){
            this.insertToNode(newNode,insertNode.left);
           }else{
             insertNode.left=newNode;
           }
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
bst.add(15);
console.log(bst);
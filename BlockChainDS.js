
class Block{
    
    constructor(index, timestamp, data){
      this.index =index;
      this.timestamp =timestamp;
      this.data =data;
      this.previousHash=null;
      this.hash=this.calculateHash();
  
    }
    
    calculateHash(){
      return this.index+this.timestamp.getTime()+this.data.trim()+'';
    }
   
  }
  
  class Chain{
    constructor(){
      this.chain=[this.createGenesisBlock()];
    }
    
    createGenesisBlock(){
      return new Block(0,new Date(),'Genesis block','0');
    }
    
    getLatestBlock(){
      return this.chain[this.chain.length-1];
    }
    
    addBlock(newBlock){
      newBlock.previousHash= this.getLatestBlock().hash; 
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
    }
    
     isValidChain(){
      for(let i=1; i < this.chain.length;i++){
        let currentBlock = this.chain[i];
        let previousBlock = this.chain[i-1];
  
        if(currentBlock.hash != currentBlock.calculateHash()){
           return false;
         }
        
        if(currentBlock.previousHash != previousBlock.hash){
           return false;
         }
        
      }
       
      return true;
    }
    
  }
  console.clear();
  let chain = new Chain();
  chain.addBlock(new Block(chain.chain.length,new Date(),'transfer 1'))
  chain.addBlock(new Block(chain.chain.length,new Date(),'transfer 2'))
  
  console.log(JSON.stringify(chain, null,4));
  console.log('Is chain valid?  '+chain.isValidChain());
  
  chain.chain[1].data='hai';
  console.log('Is chain valid?  '+chain.isValidChain());
  
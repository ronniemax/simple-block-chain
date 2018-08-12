/* ===== Block Class ==============================
|  Class with a constructor for block 			   |
|  ===============================================*/
class Block{
  
    /* Constructor accepts data to be added to 
    the block's body */
    constructor(data){
    
      this.hash = "", //sha256 hash of the given block
    
      this.height = 0, //height of the given block

      this.time = 0, //timestamp when the block is generated
    
      this.previousBlockHash = "", //Link to the previous block's sha256 hash
    
      this.body = data //Block's body
    
     }
  }

  /* Make the Block class accessible to simpleChain */
  module.exports = Block; 
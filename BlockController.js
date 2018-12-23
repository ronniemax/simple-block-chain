const SHA256 = require('crypto-js/sha256');

const BlockChain = require('./BlockChain.js');

const Block = require('./Block.js');

const bodyParser = require('body-parser')


var jsonParser = bodyParser.json()

let myBlockChain = new BlockChain.Blockchain();

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        
        this.app = app;
        
        this.blocks = [];
        
        this.getBlockByIndex();
        
        this.postNewBlock();
    }

    /**
     * GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        
        this.app.get("/api/block/:index", (req, res) => {

            myBlockChain.getBlock(req.params.index).then((block) => {
                
                //Return the block object if found
                res.send(block)
            
            }).catch((err) => { 
                
                //Return 400 is no data found
                return res.sendStatus(400)
            
            }); 
        });
    }

    /**
     * POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        
        this.app.post("/api/block",jsonParser,(req, res) => {

            //Get the value associated with "data" field in JSON request
            var inputData = req.body.data

            //Return 400 if no data found in input
            if (!inputData) return res.sendStatus(400)

            //Create a new draft block with input data
            var newBlockToBeAdded = new Block.Block(inputData)
        
            //Insert block into blockchain
            myBlockChain.addBlock(newBlockToBeAdded).then(() => {

                //Return Block as JSON
                res.send(newBlockToBeAdded)
            
            }).catch((err) => {

                console.error(err)
               
                //Return 500 if internal exception occurs
                return res.sendStatus(500)
            });

            
        });
    }
}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}
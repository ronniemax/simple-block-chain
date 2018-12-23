# Project 3 - REST APIs to interact with the private blockchain

In this project we create and manage web APIs with Express Node.js framework, to interact with the private blockchain. There will be 2 APIs exposed - 1) GET a Block from the blockchain using its height and 2) POST a new Block into the chain.

## Setup project for Review.

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. OPTIONAL Run command __node simpleChain.js__ in the root directory to initialize a blockchain and insert some dummy values. This will add 10 blocks to the blockchain for testing purpose. Wait till "Inserted Bock# 10 into DB." is printed to proceed to next step.
4. Run command __node app.js__ in the root directory to kick start express web server on *http://localhost:8000*


### Project Dependencies

The project has been build using Node *v10.14.2*  
```
- crypto-js@3.1.9-1
- body-parser@1.18.3
- express@4.16.4
- level@4.0.0
```

## REST API Details

### 1. GET /api/block/{BlockHeight}

This API can be used to fetch a given Block information from the Blockchain by passing in its block height. 

An example would be:

##### 1.1 Request With Valid Block Height Input
```
Method: GET

Endpoint : http://localhost:8000/api/block/14 

```

##### Response
```
Status Code: 200

{
    "hash": "42f2f1db24d7fd4690a95a8c1939524c1420086027962d18b453ebb65a48ec01",
    "height": 14,
    "body": "Hello, world!",
    "time": "1545532273",
    "previousBlockHash": "394bb56288219b9c53b5dbff5a6cdd37114b1430e80c9d262bbb2554c385bfa9"
}
```

##### 1.2 Request With Invalid Block Height Input
```
Method: GET

Endpoint: http://localhost:8000/api/block/abc 

```

##### Response
```
Status Code: 400 (Bad Request)
```

### 2. POST /api/block/

This API can be used to add a new Block to the blockchain. The data to be added to the blockchain body is passed as a JSON request body. The block headers are then generated and add to the blockchhain along with the body. The API responds back with the newly added blockchain object. 

##### 2.1 Request with valid data body
```
Method: POST

Endpoint: http://localhost:8000/api/block

Body: {"data":"Hello, world!"}

Content-Type: application/json
```


##### Response
```
Status Code: 200

{
    "hash": "42f2f1db24d7fd4690a95a8c1939524c1420086027962d18b453ebb65a48ec01",
    "height": 14,
    "body": "Hello, world!",
    "time": "1545532273",
    "previousBlockHash": "394bb56288219b9c53b5dbff5a6cdd37114b1430e80c9d262bbb2554c385bfa9"
}
```

##### 2.2 Request With Invalid data body
```
Method: POST

Endpoint: http://localhost:8000/api/block

Body: Empty OR {}

Content-Type: application/json

```

##### Response
```
Status Code: 400 (Bad Request)
```

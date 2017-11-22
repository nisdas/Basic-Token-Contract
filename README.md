# Basic-Token-Contract

This is a simple script to generate a simple token contract, that can be deployed in the Ethereum blockchain.
The details of the token contract can be inputted in the config file , where you can add in all the details required for your token contract.
After that is done then you can fire up node repl and input this:

`.load Run.js`

This will run the script and initialize the web3 library and http server. After that this deploys the contract automatically to the blockchain node
through the port 8545. from here you can interact with the contract.

`transfer(to,value)`

using the above command on node you can directly transfer the tokens of that value from your address in your config account to your address
in your argument above. There is no need to use the web3 library to access the methods of the contract as the script initializes the methods into easily typed
variables. 

The same applies for

`burn(value)`
`setPrice(newbuy,newSell)`
`buytokens(value)`
`selltokens(amount)`
`balance(address)`

This an easy to use method to deploy simple token contracts onto the blockchain, using either testrpc, or the live ethereum blockchain

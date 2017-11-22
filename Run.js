var config = require('./config.js');
var web3 = require("web3");
var fs = require("fs");


web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"));
var source = JSON.parse(fs.readFileSync('./build/contracts/token.json', 'utf8'));
var tokencontract = new  web3.eth.Contract(source.abi);
tokencontract.deploy({data: source.bytecode,arguments:[config.TokenSupply,config.TokenSymbol,config.TokenName,config.buyPrice,config.sellprice]}).send({from: config.address, gas:1500000}).on('confirmation', function(confirmationNumber, receipt){ console.log(confirmationNumber); tokencontract.options.address = receipt.contractAddress; }).on('receipt', function(receipt){console.log(receipt)})
function burn(value){
tokencontract.methods.burn(value).send({from: config.address}).then(console.log);
}
function transfer(to,value){
tokencontract.methods.transfer(to,value).send({from: config.address}).then(console.log);
}
function setPrice(newbuy,newsell){
tokencontract.methods.transfer(newbuy,newsell).send({from: config.address}).then(console.log);
}
function buytokens(value){
tokencontract.methods.buytokens().send({from: config.address, value: value}).then(console.log);
}
function selltokens(amount){
tokencontract.methods.selltokens(amount).send({from: config.address}).then(console.log);   
}
function balance(address){
tokencontract.methods.tokenBalance(address).call().then(console.log);   
}

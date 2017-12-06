var deploy = require('./deploy.js');
var config = require('./config.js');



function burn(value){
deploy.tokencontract.methods.burn(value).send({from: config.address}).then(console.log);
}
function transfer(to,value){
deploy.tokencontract.methods.transfer(to,value).send({from: config.address}).then(console.log);
}
function setPrice(newbuy,newsell){
deploy.tokencontract.methods.transfer(newbuy,newsell).send({from: config.address}).then(console.log);
}
function buytokens(value){
deploy.tokencontract.methods.buytokens().send({from: config.address, value: value}).then(console.log);
}
function selltokens(amount){
deploy.tokencontract.methods.selltokens(amount).send({from: config.address}).then(console.log);   
}
function balance(address){
deploy.tokencontract.methods.tokenBalance(address).call().then(console.log);   
}


var deploy = require('./deploy.js');
var config = require('./config.js');



function totalSupply() {
    deploy.tokencontract.methods.totalSupply().call().then(console.log);
}
function balanceOf(address){
deploy.tokencontract.methods.balanceOf(address).call().then(console.log);
}
function transfer(to,value){
deploy.tokencontract.methods.transfer(to,value).send({from: config.address}).then(console.log);
}
function transferFrom(from,to,amount){
deploy.tokencontract.methods.transferFrom(from,to,value).send({from: config.address}).then(console.log);
}
function approve(spender,value){
deploy.tokencontract.methods.approve(spender,value).send({from: config.address}).then(console.log);   
}
function allowance(owner,spender){
deploy.tokencontract.methods.allowance(owner,spender).send({from: config.address}).then(console.log);   
}


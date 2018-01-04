var config = require('./config.js');
var web3 = require("web3");
var fs = require("fs");
var solc = require("solc");

web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"));
var compiledCode = solc.compile(fs.readFileSync('./contracts/token.sol', 'utf8'),1);
var source = compiledCode.contracts[":token"];
var tokencontract = new  web3.eth.Contract(JSON.parse(source.interface));
tokencontract.deploy({data: source.bytecode,arguments:[config.TokenSupply,config.TokenSymbol,config.TokenName,config.Decimals]}).send({from: config.address, gas:1500000}).on('confirmation', function(confirmationNumber, receipt){ console.log(confirmationNumber); tokencontract.options.address = receipt.contractAddress; }).on('receipt', function(receipt){console.log(receipt)})


module.exports = {
    
    web3 ,
    compiledCode,
    source,
    tokencontract

}
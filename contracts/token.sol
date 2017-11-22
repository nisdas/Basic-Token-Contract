pragma solidity ^0.4.16;

contract token{

    
    uint256 public totalSupply;
    string public tokenSymbol;
    string public tokenName;
    uint256 public decimals = 18;
    uint256 public buyprice;
    uint256 public sellprice;
    address public owner;

    mapping(address => uint) public tokenBalance;

    event Transfer(address from, address to, uint256 value);
    event Burn(address from, uint256 value, uint256 ttlsupply);
    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }

    function token(uint256 initialsupply, string symbol, string name, uint256 buyPrice, uint256 sellPrice) public {

        totalSupply = initialsupply * 10**decimals;
        tokenBalance[msg.sender] = totalSupply;
        tokenSymbol = symbol;
        tokenName = name;
        buyprice = buyPrice;
        sellprice = sellPrice;
        require(buyprice >= sellprice);
        owner = msg.sender;
    



    }

    function internalTransfer(address from, address to, uint256 value ) internal {
        require(to != 0x0);
        require(tokenBalance[from] >= value);
        uint256 sumofToken = tokenBalance[from] + tokenBalance[to];
        tokenBalance[from] -= value;
        tokenBalance[to] += value;
        require(sumofToken == tokenBalance[from] + tokenBalance[to]);
        Transfer(from,to,value);
    }

    function transfer(address to, uint256 value) public {
        internalTransfer(msg.sender,to,value);
    }

    function burn(uint256 value) public returns (bool result) {
        require(tokenBalance[msg.sender] >= value);
        tokenBalance[msg.sender] -= value;
        totalSupply -= value;
        Burn(msg.sender,value,totalSupply);
        return true;

    }

    function setPrice(uint256 newbuyprice, uint256 newsellprice) onlyOwner public returns(bool result) {
        require(newbuyprice > newsellprice);
        buyprice = newbuyprice;
        sellprice = newsellprice;
        return true;

    }

    function buytokens() payable public returns(bool result) {
        require(msg.value <= msg.sender.balance);
        require(msg.value/buyprice <= tokenBalance[owner]);
        uint256 amount = msg.value/buyprice;
        internalTransfer(owner, msg.sender,amount);
        return true;
        
        }

    function selltokens(uint256 amount)  public returns(bool result) {
        require(tokenBalance[msg.sender] >= amount);
        uint256 totalValue = amount * sellprice;
        require(this.balance >= totalValue);
        internalTransfer(msg.sender,this,amount);
        this.transfer(totalValue);
        return true;


    }

    function () payable public {

    }

    
}

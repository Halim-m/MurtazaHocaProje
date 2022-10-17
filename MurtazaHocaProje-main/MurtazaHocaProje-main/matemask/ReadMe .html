//css

<style>
    body {
        background-color: palevioletred;
        font-family: tahoma;
        font-size: 33px;
        display: flex;
        flex-direction: row;
    }
    button {
        background-color: aquamarine;
        font-size: 33px;
        padding: 5px;
        font-family: Impact;
    }
    input {
        width: 25vw;
        height: 30px;
        font-size: 25px;
        font-family: tahoma;
        outline: none;
    }
    #readArea {
        flex-basis: 50%;
    }
    #writeArea {
        flex-basis: 50%;
    }
    button:hover {
        background-color: yellow;
    }

</style>

//html

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></script>

<button onclick="matemaskConnect()"><p>bişeyler</p> </button>
<p id="matemaskTxt"></p>
<button onclick="connectContract()">CONNECT TO CONTRACT</button> <br>
<p id="contractArea"></p>
<button onclick="readContract()">GET DATA FROM CONTRACT</button> <br>
<p id="dataArea"></p>
<button onclick="changeWord()">GET DATA FROM CONTRACT</button> <br>
<input type="text" id="1">

<button onclick="getContractAccount()"> GET CONTRACT ACCOUNT </button>
<p id="contractAccount">Contract Account: Not Connected to Contract</p>

<button onclick="getBalanceApple()">GET BALANCE OF THE CONTRACT</button>
<p id="balanceArea">Balance: Not Connected to Contract</p>

<button onclick="depositContract()">Send ether to the Contract</button><br>
<input type="number" id="depositInput" placeholder="Enter Amount"><br> <br>

<button onclick="withdraw()">WITHDRAW ETHER TO ANY ADDRESS</button> <br>
<input type="text" id="addressInput" placeholder="Enter Address"> <br>
<input type="number" id="amountInput" placeholder="Enter Amount"> 



//js

//matemaskConnect
let msg;
const matemaskConnect = async () => {
    if(window.ethereum!= undefined){
        // alert("matemaskAlgılandı");
        //how to connect ethereum account with requestAccount method ?
    const accounts = await ethereum.request({method:"eth_requestAccounts"});
    msg =accounts[0];
    document.getElementById("matemaskTxt").innerHTML= msg;
    alert("wallet  connected:\n"+msg);
}
    else{alert("install matemask");}
}
 // connect to smart contract
const connectContract = async () => {
    const ABI ;// remix
    const Address = "";// remix
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( ABI, Address); 
    document.getElementById("contractArea").innerHTML = "connected to smart contract";
} 
//read data from smart contract
const readContract = async () => {
    try{ const data = await window.contract.methods.getFlower().call();
    document.getElementById("dataArea").innerHTML = data;}
    catch  {document.getElementById("dataArea").innerHTML = "error! \n try to connect the smart contract \n or check the wallet connection ";}
}
const changeWord=async () =>{
    var inputValue  =document.getElementById("1").value;
    await window.contract.methods.changeFlower(inputValue).send({ from: msg });
    readContract();
}


const getContractAccount = async () => {
    const data = await window.contract.methods.getAddress().call();
    document.getElementById("contractAccount").innerHTML = `Contract Account: ${data}`;
}

const getBalanceApple = async () => {
    const data = await window.contract.methods.getBalance().call();
    document.getElementById("balanceArea").innerHTML = `Contract Balance: ${data}`;
}

const depositContract = async () => {
    const amount = document.getElementById("depositInput").value;
    await window.contract.methods.deposit().send({from: account, value: amount});
}

const withdraw = async () => {
    const amount = document.getElementById("amountInput").value;
    const address = document.getElementById("addressInput").value;
    await window.contract.methods.withdraw(address, amount).send({from: account});
}


//server
const exprss=require("express");
const app =exprss();
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html');});
const server = app.listen(4000);
console.log(server.address().port);

//sol

//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.7;
contract SolTransactions {
    //Address --> Contract -- deposit
    function deposit() external payable {}
    //Contract --> Address  -- withdrawal
    function withdraw(address payable _to, uint _amount) external {_to.transfer(_amount);}
    function getBalance() external view returns(uint) {return address(this).balance;}
    function getAddress() external view returns(address) {return address(this);    }
}

pragma solidity >=0.8.7;
contract Sol{
    string internal flower = "rose";
    function getFlower() external view returns(string memory) {return flower;}
    function changeFlower(string memory _word) external {flower = _word;}
}
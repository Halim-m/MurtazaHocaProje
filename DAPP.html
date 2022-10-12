    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></script>
    <button onclick="matemaskConnect()"><p>bişeyler</p> </button>
    <p id="matemaskTxt"></p>
	<button onclick="connectContract()">CONNECT TO CONTRACT</button> <br>
	<p id="contractArea"></p>
	<button onclick="readContract()">GET DATA FROM CONTRACT</button> <br>
	<p id="dataArea"></p>
    <button onclick="changeWord()">GET DATA FROM CONTRACT</button> <br>
    <input type="text" id="1">

    //script
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

    //server
const exprss=require("express");
const app =exprss();
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html');});
const server = app.listen(4000);
console.log(server.address().port);
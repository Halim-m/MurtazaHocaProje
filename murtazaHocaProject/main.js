const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        window.web3 = await new Web3(window.ethereum);
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];

        try {
            await window.ethereum.enable();
            myblnc = web3.eth.getBalance(account).then(aaaa);
            document.getElementById("userArea").innerHTML = `User Account: ${account}\n${myblnc}`;
        } catch (error) {
            console.log("error!!!!");
        };

        document.getElementById("userArea").innerHTML = `User Account: ${account}`;



        //await getContractAccount();
        //await getBalanceApple();

    }
}
const aaaa = (value) => {
    myblnc = value; document.getElementById("userArea").innerHTML = `User Account: ${account}\n${value / 1000000000000000000}`;
}

const connectContract = async (Address) => {
    const ABI = [
        {
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    //const Address = "0x05a77BE0c843dC9A258b01b1CA3337F5F57C6D7B;
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    document.getElementById("contractArea").innerHTML = "Connected to Contract";
    await getContractAccount();
}

const getContractAccount = async () => {
    const data = await window.contract.methods.getAddress().call();
    document.getElementById("contractAccount").innerHTML = `Contract Account: ${data}`;
}

const getBalanceApple = async () => {
    const data = await window.contract.methods.getBalance().call();
    document.getElementById("balanceArea").innerHTML = `Contract Balance: ${data / 1000000000000000000}`;
}

const depositContract = async (amount, AccountId) => {
    if (AccountId > 4) {
        withdraw(amount, AccountId);
    }
    amount = amount * 1000000000000000000n;
    if (amount > myblnc) { alert("bakiyeYetersiz"); }

    else {

        await connectMetamask();
        adress = contractAccounts[AccountId];
        await connectContract(adress);
        const result = await window.contract.methods.deposit().send({ from: account, value: amount });
        await window.ethereum.enable();
        myblnc = web3.eth.getBalance(account).then(aaaa);
        console.log(result);
        console.log(result.status);
        console.log(typeof result);

        //sat�n alma ba�ar�l� ise
        if (result.status) {
            var x = document.createElement("INPUT");
            x.setAttribute("type", "text");
            x.setAttribute("id", "input");

            var but = document.createElement("INPUT");
            but.setAttribute("type", "submit");

            but.setAttribute("onclick", "gonder()");

            //const yorum = document.getElementById("paragraf1").value;

            //   para.innerText = "This is a paragraph";
            if (eklendiMi === false) {
                document.getElementById("yorumsatir").appendChild(x);
                document.getElementById("yorumsatir").appendChild(but);
            }

        }
        else {
            alert("i�leminiz ba�ar�s�z");
        }
        try {
            await getBalanceApple();
        } catch (error) {

        };
    }
}
const gonder = () => {
    console.log("ben �a��t�m");
    const para = document.createElement("p");
    para.setAttribute("id", "satir");
    para.setAttribute("class", "b1");
    const yorum = document.getElementById("input").value;
    document.getElementById("yorumsatir").appendChild(para);
    if (!(yorumcu[0] === account)) {
        para.innerText = `${yorum} \n ${account} `
        yorumcu.push(account);
        console.log("yorumunuz al�nd�");
        console.log(yorum);
    }
    else {
        alert("birden fazla yorum yapamazs�n");
    }

}
const withdraw = async (amount, account) => {
    await depositContract(amount, 0);
    await window.contract.methods.withdraw(adress, amount).send({ from: account });
}
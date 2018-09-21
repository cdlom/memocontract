import React, { Component } from "react";
import SimpleStorageContract from "./contracts/MemoContract.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";

import "./App.css";

const Tx = require('ethereumjs-tx');

class App extends Component {
  state = {
    storageValue: 5,
    jugadas: [],
    web3: null,
    accounts: null,
    contract: null
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      //const Contract = truffleContract(SimpleStorageContract);
      //Contract.setProvider(web3.currentProvider);
      //const instance = await Contract.deployed();


      // Evento
      /* const JugadaEvento = instance.addedJugada(  );
  
      JugadaEvento.watch({} , '', function (error, result) {
      //  instance.addedJugada({}).watch(function (error, result) { 
          if (!error) {
            console.log("llamo al evento con la jugada");
            console.log(result);
    
          } else {
    
            console.log("la llamada al evento fue error");
            console.error(error);
          }
    
        }); */

      //instance.addedJugada()
      //  .on('data', function (event) {
      //    console.log(event); // same results as the optional callback above
      //  })
      //  .on('changed', function (event) {
      // remove event from local database
      // })
      //.on('error', console.error);




      //Instanciar el contrato por web3 derecho

      /*  var abiarray =
       [{
         "constant": false, "inputs": [{ "name": "_deviceId", "type": "uint8" },
         { "name": "_timestamp", "type": "uint256" }, { "name": "_temperature", "type": "uint256" }],
         "name": "addReading", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
       },
       {
         "constant": true, "inputs": [{ "name": "_deviceId", "type": "uint8" }, { "name": "_readingNumber", "type": "uint8" }]
         , "name": "getLastNReadingsByDeviceId", "outputs": [{ "name": "", "type": "address[]" }, { "name": "", "type": "uint256[]" },
         { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function"
       },
       { "constant": true, "inputs": [{ "name": "_deviceId", "type": "uint8" }], "name": "getDeviceById", "outputs": [{ "name": "description", "type": "bytes32" }, { "name": "state", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getAllDevices", "outputs": [{ "name": "", "type": "uint8[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint8[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_deviceId", "type": "uint8" }, { "name": "_description", "type": "bytes32" }, { "name": "_state", "type": "uint8" }], "name": "addDevice", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];
 
  */


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  runExample = async () => {
    //const { accounts, contract } = this.state;


    // ropDemoSupplyChainContract.getDeviceById(1,
    //   function (error, result) {
    //     if (!error) {
    //       console.log(result);
    //       console.log(result[0].toString());

    //       _this.setState({ devicename: result[0].toString() })
    //       console.log(_this.state.devicename);

    //     }
    //     else
    //       console.error(error);
    //   });

    /* 
        contract.events.addedJugada({
          //filter: { myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789...' }, // Using an array means OR: e.g. 20 or 23
          fromBlock: 0
        }, function (error, event) { 
                  console.log("detecta el evento?");
                  console.log(event);
                  console.log(error); })
          .on('data', function (event) {
            console.log ("Evento Jugada agreada")
            console.log(event); // same results as the optional callback above
          })
          .on('changed', function (event) {
            // remove event from local database
          })
          .on('error', console.error); */

    const web3 = this.state.web3;

    var abiarray =
      [
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "direcciones",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "jugadas",
          "outputs": [
            {
              "name": "idjugada",
              "type": "uint256"
            },
            {
              "name": "fecha",
              "type": "uint256"
            },
            {
              "name": "nombre",
              "type": "string"
            },
            {
              "name": "mail",
              "type": "string"
            },
            {
              "name": "intentos",
              "type": "uint256"
            },
            {
              "name": "tiempo",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "jugadanro",
              "type": "uint256"
            }
          ],
          "name": "addedJugada",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_direccion",
              "type": "address"
            },
            {
              "name": "_estado",
              "type": "bool"
            }
          ],
          "name": "updateDireccion",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_fecha",
              "type": "uint256"
            },
            {
              "name": "_nombre",
              "type": "string"
            },
            {
              "name": "_mail",
              "type": "string"
            },
            {
              "name": "_intentos",
              "type": "uint256"
            },
            {
              "name": "_tiempo",
              "type": "uint256"
            }
          ],
          "name": "addJugada",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "fetchJugadas",
          "outputs": [
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "bytes32[]"
            },
            {
              "name": "",
              "type": "bytes32[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "source",
              "type": "string"
            }
          ],
          "name": "stringToBytes32",
          "outputs": [
            {
              "name": "result",
              "type": "bytes32"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]



    var contractaddress = '0xfd8a9874c2926b8f48096fbe736cefe935189fc0';

    const myAddress = '0x3CB0A8Af4289384696Dd2E576d54149c4b2f599F';
    var privateKey = Buffer.from('F7D0417D509D00CC54E77C7023C16B1F750F8FE6C9B5581436FA4191BE50C9BB', 'hex')

    var contract = new web3.eth.Contract(abiarray, contractaddress, {
      from: myAddress,
      gasPrice: '20000000000',
      gas: 3000000
    }); //Contract Object

    console.log("Instancia Obtenida con web3");
    console.log(contract);






    var count;
    // get transaction count, later will used as nonce
    web3.eth.getTransactionCount(myAddress).then(function (v) {
      console.log("Count: " + v);
      count = v;
      var amount = web3.utils.toHex(2);
      //creating raw tranaction
      var rawTransaction = {
        "from": myAddress,
        "gasPrice": web3.utils.toHex(20 * 1e9),
        "gasLimit": web3.utils.toHex(420000),
        "to": contractaddress,
        "value": "0x00",
        "data":
          //contract.methods.addReading(1, web3js.utils.toHex(1535743932583),
          //web3js.utils.toHex(Math.round(temp))).encodeABI(),
          contract.methods.addJugada(
            22222,
            "Cristian",
            "Cristian@gmail.com",
            20,
            120).encodeABI(),
        "nonce": web3.utils.toHex(count)
      }
      console.log(rawTransaction);
      //creating tranaction via ethereumjs-tx
      var transaction = new Tx(rawTransaction);
      //signing transaction with private key
      transaction.sign(privateKey);
      //sending transacton via web3js module
      web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
        .on('transactionHash', console.log)
        .on('receipt', function (receipt) {
          // receipt example
          console.log("on receipt");
          console.log(receipt);

        })


    })

    /* contract.methods.addJugada(
         22222,
         "Cristian",
         "Cristian@gmail.com",
         20,
         120)
         .send(
           { from: myAdress })
         .on('transactionHash', function (hash) {
           console.log("on transactionHash");
           console.log(hash);
         })
         .on('addedJugada', function (hash) {
           console.log("on addedJugada");
           console.log(hash);
         })
         .on('confirmation', function (confirmationNumber, receipt) {
      //     console.log("on Confirmation");
      //     console.log(confirmationNumber);
         })
         .on('receipt', function (receipt) {
           // receipt example
           console.log("on receipt");
           console.log(receipt);
   
         });
    */



















    // Stores a given value, 5 by default.
    //await contract.set("Hola Cristian , esta funcionando", { from: accounts[0] });
    // await contract.addJugada(
    //   22222,
    //   "Cristian",
    //   "Cristian@gmail.com",
    //   20,
    //   120,
    //   { from: accounts[0] }
    // );

    /* 
        await contract.addJugada(
          33333,
          "Jupa",
          "Jupan@gmail.com",
          10,
          60,
          { from: accounts[0] }
        );
    
        await contract.addJugada(
          33333,
          "DLS",
          "DSL@gmail.com",
          10,
          60,
          { from: accounts[0] }
        );
    
    
        // Get the value from the contract to prove it worked.
        //const response = await contract.get();
        const _jugada = await contract.jugadas(0);
    
        console.log("Primer Jugada");
        console.log(_jugada);
    
    
        const _alljugadas = await contract.fetchJugadas();
        console.log("todas las jugadas");
        console.log(_alljugadas);
    
    
    
    
        // Update state with the result.
        //this.setState({ jugadas: _alljugadas });
    
        var i = 0;
    
        var _arrayjugadas = [];
    
        const web3 = this.state.web3;
    
    
    
    
        for (i = 0; i < _alljugadas[0].length; i++) {
    
          const _idjugada = _alljugadas[0][i].toNumber();
          const _fecha = _alljugadas[1][i].toNumber();
          const _nombre = web3.utils.toUtf8(_alljugadas[2][i]);
          const _mail = web3.utils.toUtf8(_alljugadas[3][i]);
          const _intentos = _alljugadas[4][i].toNumber();
          const _tiempo = _alljugadas[5][i].toNumber();
    
          _arrayjugadas.push({
    
            idjugada: _idjugada,
            fecha: _fecha,
            nombre: _nombre,
            mail: _mail,
            intentos: _intentos,
            tiempo: _tiempo,
          });
        }
    
        this.setState({ jugadas: _arrayjugadas });
    
        console.log(this.state.jugadas);
    
    
     */



  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 37</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;

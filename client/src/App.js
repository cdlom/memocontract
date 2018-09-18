import React, { Component } from "react";
import SimpleStorageContract from "./contracts/MemoContract.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";

import "./App.css";

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
      const Contract = truffleContract(SimpleStorageContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    //await contract.set("Hola Cristian , esta funcionando", { from: accounts[0] });
    await contract.addJugada(
      22222,
      "Cristian",
      "Cristian@gmail.com",
      20,
      120,
      { from: accounts[0] }
    );


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

    console.log ( this.state.jugadas);

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

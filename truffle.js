
var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config({ path:require('path').join(__dirname,'.env')});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
      gas: 4700000
    },
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 4700000,
      gasPrice: 51
       
       },
  }

};

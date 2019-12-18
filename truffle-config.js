
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.MNEMONIC;

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },


  networks: {

    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 2000000,   // <--- Twice as much
      gasPrice: 10000000000,
    },
    local: {
      host: "localhost",
      port: 8545,
      provider: () => {
        return new HDWalletProvider(mnemonic, "http://localhost:8545");
      },
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    tomo: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "https://rpc.tomochain.com");
      },
      network_id: 88,
      gas: 4200000,
      gasPrice: 10000000000
    },

    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/710034254fa54f4cb22c151aeb0b398e");
      },
      network_id: 4,
      gas: 4000000
    }
  }
  
};

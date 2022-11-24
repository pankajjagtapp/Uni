require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// require("hardhat-gas-reporter");
// require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);

    console.log(ethers.utils.formatEther(balance), "ETH");
  });

//   task(
//     "hello",
//     "Prints 'Hello, World!'",
//     async function (taskArguments, hre, runSuper) {
//       console.log("Hello, World!");
//     }
//   );

// require("MainnetFork.js");
// console.log(process.env);

const GOERLI_PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_FOR_TESTNET = process.env.ETHERSCAN_API_FOR_TESTNET

module.exports = {
    solidity: "0.8.9",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
    networks: {
      hardhat: {
        allowUnlimitedContractSize: true,
        gas: 2100000,
        gasPrice: 8000000000,
        chainId: 0
      },
    },

    // gasReporter: {
    //   currency: 'CHF',
    //   gasPrice: 21
    // },

    networks: {
        goerli: {
            url: `https://eth-goerli.g.alchemy.com/v2/iORl0somTK0y84DbBRgp1XbensOB8ixB`,
            // url: `https://eth-mainnet.g.alchemy.com/v2/BbRtDUwghMUvGOM7uaFXmpxLl8tk-myY`,
            // url: `https://cloudflare-eth.com`,
            accounts: ['6eb265f611c61c20deb99d6b0d4025ef4199814687465820509f0dc36cd63f09'],
            // url: `https://rpc.goerli.mudit.blog/`,
            gas: 2100000,
            gasPrice: 8000000000,
        },
        // hardhat: {
        //     allowUnlimitedContractSize: true,
        //     forking: {
        //       url: "https://eth-mainnet.g.alchemy.com/v2/JANFRLdPIbn_R8jqYPbDYpsjBaJTUiUS",
        //     }
        //   }
    },
    // etherscan: {
    //     apikey: {
    //         goerli: '4GRINZQPUA9WGGVPXV8I7N6IIIITPXAHNN',
    //     },
    // },
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
  
    for (const account of accounts) {
      console.log(account.address);
    }
  });

// networks: {
//   goerli: {
//       url: `https://eth-goerli.g.alchemy.com/v2/TzUuzN7nT3rIVrI4syelV_O3E80NNm1O`,
//       // url: `https://rpc.goerli.mudit.blog/`,
//       accounts: ['1aa00af2249c90ddef8565fb073e682e361699fd802b46b2efc867198ffbc71c'],
//       // gasPrice: 50000000000
//     },
//   // hardhat: {
//   //   allowUnlimitedContractSize: true,
//   //   // chainId: 0
//   // },
// },

// var ethers = require('ethers');  
// var url = 'ADD_YOUR_ETHEREUM_NODE_URL';
// var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
// customHttpProvider.getBlockNumber().then((result) => {
//     console.log("Current block number: " + result);
// });
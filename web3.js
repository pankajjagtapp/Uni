var Web3 = require("web3")
const web3 = new Web3("https://goerli.optimism.io")

// web3.eth.getBlockNumber(function (error, result) {
//   console.log(result)
// })

web3.eth.getStorageAt("0x78BA1a1DD8833A4a20ecAc0Db8f3aCD8A9211beD", 1).then(console.log);

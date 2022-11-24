const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/iORl0somTK0y84DbBRgp1XbensOB8ixB');

let abi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

// const UniContract = new ethers.Contract('0xadF53d7f35aA891a40B1e80f80CDA93ceAA6FEB8',abi,provider);
const tuniswapContract = new ethers.Contract('0xf10De7ea0D4308591b05C0E122d83ae4bA1709eF',abi,provider);
const tapeswapContract = new ethers.Contract('0x293cB63CBe7547A67F03F0b3552529c30B97669b',abi,provider);
const tbiswapContract = new ethers.Contract('0xf10De7ea0D4308591b05C0E122d83ae4bA1709eF',abi,provider);

let tokenAAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
let WETHabi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const tokenAAddress = '0x0eb16Af617b64d2aE5c075bd7ac92d0dcB24E9C9';
const tokenBAddress = '0x5cB0Cb8875e0682f1Ba77017e87DD67Ae51AA4a7';
const tokenZAddress = '0x274F9Ea794592cBABeC0A5231bAA2102e8Ee02A0';
const TBUSDAddress = '0x324588dB8B3C538737cFBc9E1F96cB17215687Cd';
const TUSDTAddress = '0x98Fb638CC10566f85BCB8f2D3291733944749C00';
const TUSDCAddress = '0x66adc0b2547fb9b6c1392B8E54Ee79D87ab20916';
const WETHAddress = '0x94a16eE15b0355F38DFF4c9D000C99D0f6ae2AA6';

const taxableToken = '';

const tokenA = new ethers.Contract(tokenAAddress,tokenAAbi,provider);
const tokenB = new ethers.Contract(tokenBAddress,tokenAAbi,provider);
const tokenZ = new ethers.Contract(tokenZAddress,tokenAAbi,provider);
const TBUSD = new ethers.Contract(TBUSDAddress,tokenAAbi,provider);
const TUSDT = new ethers.Contract(TUSDTAddress,tokenAAbi,provider);
const TUSDC = new ethers.Contract(TUSDCAddress,tokenAAbi,provider);
const WETH = new ethers.Contract(WETHAddress,WETHabi,provider);

const TOKEN_A_AMOUNT = ethers.utils.parseEther("10");
const TOKEN_12_AMOUNT = ethers.utils.parseEther("12.5");
const TOKEN_20_AMOUNT = ethers.utils.parseEther("10");

let privateKey = '6eb265f611c61c20deb99d6b0d4025ef4199814687465820509f0dc36cd63f09';
// Create a wallet instance
let wallet = new ethers.Wallet(privateKey, provider);

async function main(){

// await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// // console.log("WETH: ", await tuniswapContract.WETH());
// await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,tokenBAddress,100000000,100000000,1,1,wallet.address,1964541741);

// await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// console.log("Approved");
// await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,TOKEN_A_AMOUNT,TOKEN_20_AMOUNT,1,1,wallet.address,1964541741);
// await tuniswapContract.connect(wallet).swapExactTokensForTokens(1000000000000, 1, [tokenAAddress, TBUSDAddress], wallet.address, 1964541741);
// console.log("Swap1 Done");

await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
await TUSDT.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDTAddress,100000000,1000000000,1,1,wallet.address,1964541741);
await tuniswapContract.connect(wallet).swapExactTokensForTokens(1000, 1, [tokenAAddress, TUSDTAddress], wallet.address, 1964541741);
console.log("Swap2 Done");

await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDCAddress,100001230000,100000000,1,1,wallet.address,1964541741);
await tuniswapContract.connect(wallet).swapExactTokensForTokens(7000, 1, [tokenAAddress, TUSDCAddress], wallet.address, 1964541741);
console.log("Swap3 Done");

// await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,1000000200,1000530000,1,1,wallet.address,1964541741);

// await tokenB.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await TUSDT.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDTAddress,10000200,1000530000,1,1,wallet.address,1964541741);

// await TBUSD.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(TBUSDAddress,TUSDCAddress,10000200,100530000,1,1,wallet.address,1964541741);

// await tokenA.connect(wallet).approve(tuniswapContract.address,TOKEN_A_AMOUNT);
// await tokenZ.connect(wallet).approve(tuniswapContract.address,TOKEN_12_AMOUNT);
// await tuniswapContract.connect(wallet).addLiquidity(tokenAAddress,tokenZAddress,TOKEN_A_AMOUNT,TOKEN_12_AMOUNT,1,1,wallet.address,1964541741);

// console.log("Tuniswap");

// TAPESWAP

// await tokenA.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,7000300000,9000000400,1,1,wallet.address,1964541741);

// await tokenA.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await TUSDT.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDTAddress,1000003000,1000000000,1,1,wallet.address,1964541741);

// // await tokenA.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// // await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// // await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDCAddress,100000230000,1004000000,1,1,wallet.address,1964541741);

// await tokenB.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,1000000200,1000530000,1,1,wallet.address,1964541741);

// await tokenB.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await TUSDT.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDTAddress,10000200,10005340000,1,1,wallet.address,1964541741);

// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(TBUSDAddress,TUSDCAddress,10000200,1005302000,1,1,wallet.address,1964541741);

// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tokenZ.connect(wallet).approve(tapeswapContract.address,TOKEN_12_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(tokenAAddress,tokenZAddress,TOKEN_A_AMOUNT,TOKEN_12_AMOUNT,1,1,wallet.address,1964541741);


// console.log("TAPESWAP");

//TBISWAP
// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,1003000,903000400,1,1,wallet.address,1964541741);
// console.log("1");
// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDT.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDTAddress,120000000,100006570000,1,1,wallet.address,1964541741);
// console.log("2");

// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TUSDCAddress,900030000,100405600000,1,1,wallet.address,1964541741);
// console.log("3");

// await tokenB.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,9000000200,10000000,1,1,wallet.address,1964541741);
// console.log("4");

// await tokenB.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDT.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDTAddress,30000200,100054000,1,1,wallet.address,1964541741);
// console.log("5");

// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(TBUSDAddress,TUSDCAddress,44000200,70530000,1,1,wallet.address,1964541741);
// console.log("TBISWAP");

// await TUSDC.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tapeswapContract.address,TOKEN_A_AMOUNT);
// await tapeswapContract.connect(wallet).addLiquidity(TUSDCAddress,TBUSDAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

// await tokenB.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenBAddress,TUSDCAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

// await TUSDC.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(TUSDCAddress,TBUSDAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

// await tokenA.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await TBUSD.connect(wallet).approve(tbiswapContract.address,TOKEN_A_AMOUNT);
// await tbiswapContract.connect(wallet).addLiquidity(tokenAAddress,TBUSDAddress,TOKEN_A_AMOUNT,TOKEN_A_AMOUNT,1,1,wallet.address,1764541741);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

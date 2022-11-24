const hre = require("hardhat");

async function main() {
    const adminAdd = "0x3765DFeDf234Bf24f9df82715503B864236ddb48";
    // const [deployer, admin] = await ethers.getSigners();
    // console.log(deployer);

    // lpTokenContract = new ethers.Contract(lpTokenAddress, lpTokenAbi, signer[0]);

    // const GetInit = await ethers.getContractFactory("CalHash");
    // getInit = await GetInit.deploy();
    // initHash = await getInit.connect(signer[0]).getInitHash();

    // const LpToken = await ethers.getContractFactory("UniswapV2ERC20");
    // const lpToken = await LpToken.deploy();
    // await lpToken.deployed();
    // console.log("lpToken address: ", lpToken.address);

    const WETH = await ethers.getContractFactory("WETH9");
    const weth = await WETH.deploy();
    await weth.deployed();
    console.log("weth address: ", weth.address);

    const UniswapV2Factory = await ethers.getContractFactory(
        "UniswapV2Factory"
    );
    const uniswapV2Factory = await UniswapV2Factory.deploy(adminAdd);
    await uniswapV2Factory.deployed();
    console.log("uniswapV2Factory address: ", uniswapV2Factory.address);

    const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    const uniswapV2Pair = await UniswapV2Pair.deploy();
    await uniswapV2Pair.deployed();
    console.log("uniswapV2Pair address: ", uniswapV2Pair.address);

    const UniswapV2Router = await ethers.getContractFactory(
        "UniswapV2Router02"
    );
    let uniswapV2Router = await UniswapV2Router.deploy(
        uniswapV2Factory.address,
        weth.address
    ); 
    await uniswapV2Router.deployed();
    console.log(uniswapV2Router.address, "uniswapV2Router.address");

    const TokenA = await ethers.getContractFactory("TokenA");
    const tokenA = await TokenA.deploy();
    await tokenA.deployed();
    console.log("Token A address: ", tokenA.address);

    const TokenB = await ethers.getContractFactory("TokenB");
    const tokenB = await TokenB.deploy();
    await tokenB.deployed();
    console.log("Token B address: ", tokenB.address);

    const TokenC = await ethers.getContractFactory("TokenC");
    const tokenC = await TokenC.deploy();
    await tokenC.deployed();
    console.log("Token C address: ", tokenC.address);

    const TokenD = await ethers.getContractFactory("TokenD");
    const tokenD = await TokenD.deploy();
    await tokenD.deployed();
    console.log("Token D address: ", tokenD.address);

    const TokenE = await ethers.getContractFactory("TokenE");
    const tokenE = await TokenE.deploy();
    await tokenE.deployed();
    console.log("Token E address: ", tokenE.address);

    const TokenF = await ethers.getContractFactory("TokenF");
    const tokenF = await TokenF.deploy();
    await tokenF.deployed();
    console.log("Token F address: ", tokenF.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

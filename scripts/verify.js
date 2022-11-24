const Hre = require("hardhat");

async function main() {
    await Hre.run("verify:verify", {
        //Deployed contract address
        address: "0xC1CB67d203a27dF0D196A6F3C271F4addd515c67",
        //Path of your main contract.
        contract: "/contracts/test/WETH9.sol: WETH9",
    });
    // await Hre.run("verify:verify", {
    //     //Deployed contract address
    //     address: "0xa91a4640208910CA7A2D4b16e5F5895082d6dFc2",
    //     //Path of your main contract.
    //     contract: "/contracts/UniswapV2Factory.sol: UniswapV2Factory",
    // });
    // await Hre.run("verify:verify", {
    //     //Deployed contract address
    //     address: "0xf4ee2e48b93531541B896Bc699d5ba69F69d0772",
    //     //Path of your main contract.
    //     contract: "/contracts/UniswapV2Router02.sol: UniswapV2Router02",
    // });
    // await Hre.run("verify:verify", {
    //     //Deployed contract address
    //     address: "0x22fb276858e058bAba4d73ed4A3230e2dcBED8D3",
    //     //Path of your main contract.
    //     contract: "/contracts/TokenA.sol: TokenA",
    // });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

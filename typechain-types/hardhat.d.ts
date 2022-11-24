/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "CalHash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CalHash__factory>;
    getContractFactory(
      name: "Hack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hack__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Callee__factory>;
    getContractFactory(
      name: "IUniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2ERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Migrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Migrator__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "IUniswapV1Exchange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV1Exchange__factory>;
    getContractFactory(
      name: "IUniswapV1Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV1Factory__factory>;
    getContractFactory(
      name: "DeflatingERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DeflatingERC20__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Factory__factory>;
    getContractFactory(
      name: "RouterEventEmitter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterEventEmitter__factory>;
    getContractFactory(
      name: "Tax_token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tax_token__factory>;
    getContractFactory(
      name: "WETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH9__factory>;
    getContractFactory(
      name: "TokenA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenA__factory>;
    getContractFactory(
      name: "TokenB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenB__factory>;
    getContractFactory(
      name: "TokenC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenC__factory>;
    getContractFactory(
      name: "TokenD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenD__factory>;
    getContractFactory(
      name: "TokenE",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenE__factory>;
    getContractFactory(
      name: "TokenF",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenF__factory>;
    getContractFactory(
      name: "UniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2ERC20__factory>;
    getContractFactory(
      name: "UniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Factory__factory>;
    getContractFactory(
      name: "UniswapV2Migrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Migrator__factory>;
    getContractFactory(
      name: "UniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Pair__factory>;
    getContractFactory(
      name: "UniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Router01__factory>;
    getContractFactory(
      name: "UniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Router02__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "CalHash",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CalHash>;
    getContractAt(
      name: "Hack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hack>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Callee>;
    getContractAt(
      name: "IUniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2ERC20>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Migrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Migrator>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "IUniswapV1Exchange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV1Exchange>;
    getContractAt(
      name: "IUniswapV1Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV1Factory>;
    getContractAt(
      name: "DeflatingERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DeflatingERC20>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Factory>;
    getContractAt(
      name: "RouterEventEmitter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterEventEmitter>;
    getContractAt(
      name: "Tax_token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Tax_token>;
    getContractAt(
      name: "WETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH9>;
    getContractAt(
      name: "TokenA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenA>;
    getContractAt(
      name: "TokenB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenB>;
    getContractAt(
      name: "TokenC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenC>;
    getContractAt(
      name: "TokenD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenD>;
    getContractAt(
      name: "TokenE",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenE>;
    getContractAt(
      name: "TokenF",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenF>;
    getContractAt(
      name: "UniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2ERC20>;
    getContractAt(
      name: "UniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Factory>;
    getContractAt(
      name: "UniswapV2Migrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Migrator>;
    getContractAt(
      name: "UniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Pair>;
    getContractAt(
      name: "UniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Router01>;
    getContractAt(
      name: "UniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Router02>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
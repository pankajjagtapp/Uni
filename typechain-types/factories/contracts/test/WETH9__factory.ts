/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { WETH9, WETH9Interface } from "../../../contracts/test/WETH9";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a090815261002e916001919061007f565b50604080518082019091526004808252630ae8aa8960e31b602090920191825261005a9160029161007f565b506003805460ff1916601217905534801561007457600080fd5b506001600055610153565b82805461008b90610118565b90600052602060002090601f0160209004810192826100ad57600085556100f3565b82601f106100c657805160ff19168380011785556100f3565b828001600101855582156100f3579182015b828111156100f35782518255916020019190600101906100d8565b506100ff929150610103565b5090565b5b808211156100ff5760008155600101610104565b600181811c9082168061012c57607f821691505b6020821081141561014d57634e487b7160e01b600052602260045260246000fd5b50919050565b6108d1806101626000396000f3fe60806040526004361061009c5760003560e01c8063313ce56711610064578063313ce5671461015b57806370a082311461018757806395d89b41146101b4578063a9059cbb146101c9578063d0e30db0146101e9578063dd62ed3e146101f157600080fd5b806306fdde03146100a1578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd146101195780632e1a7d4d14610139575b600080fd5b3480156100ad57600080fd5b506100b6610229565b6040516100c391906106dd565b60405180910390f35b3480156100d857600080fd5b506100ec6100e736600461074e565b6102b7565b60405190151581526020016100c3565b34801561010857600080fd5b50475b6040519081526020016100c3565b34801561012557600080fd5b506100ec610134366004610778565b610323565b34801561014557600080fd5b506101596101543660046107b4565b6104e6565b005b34801561016757600080fd5b506003546101759060ff1681565b60405160ff90911681526020016100c3565b34801561019357600080fd5b5061010b6101a23660046107cd565b60046020526000908152604090205481565b3480156101c057600080fd5b506100b6610605565b3480156101d557600080fd5b506100ec6101e436600461074e565b610612565b610159610626565b3480156101fd57600080fd5b5061010b61020c3660046107e8565b600560209081526000928352604080842090915290825290205481565b600180546102369061081b565b80601f01602080910402602001604051908101604052809291908181526020018280546102629061081b565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b505050505081565b3360008181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103129086815260200190565b60405180910390a350600192915050565b6001600160a01b03831660009081526004602052604081205482111561036a5760405162461bcd60e51b815260206004820152600060248201526044015b60405180910390fd5b6001600160a01b03841633148015906103a857506001600160a01b038416600090815260056020908152604080832033845290915290205460001914155b15610433576001600160a01b03841660009081526005602090815260408083203384529091529020548211156103fa5760405162461bcd60e51b81526020600482015260006024820152604401610361565b6001600160a01b03841660009081526005602090815260408083203384529091528120805484929061042d90849061086c565b90915550505b6001600160a01b0384166000908152600460205260408120805484929061045b90849061086c565b90915550506001600160a01b03831660009081526004602052604081208054849290610488908490610883565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516104d491815260200190565b60405180910390a35060019392505050565b600260005414156105395760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610361565b60026000908155338152600460205260409020548111156105765760405162461bcd60e51b81526020600482015260006024820152604401610361565b336000908152600460205260408120805483929061059590849061086c565b9091555050604051339082156108fc029083906000818181858888f193505050501580156105c7573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a2506001600055565b600280546102369061081b565b600061061f338484610323565b9392505050565b600260005414156106795760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610361565b60026000908155338152600460205260408120805434929061069c908490610883565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a26001600055565b600060208083528351808285015260005b8181101561070a578581018301518582016040015282016106ee565b8181111561071c576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461074957600080fd5b919050565b6000806040838503121561076157600080fd5b61076a83610732565b946020939093013593505050565b60008060006060848603121561078d57600080fd5b61079684610732565b92506107a460208501610732565b9150604084013590509250925092565b6000602082840312156107c657600080fd5b5035919050565b6000602082840312156107df57600080fd5b61061f82610732565b600080604083850312156107fb57600080fd5b61080483610732565b915061081260208401610732565b90509250929050565b600181811c9082168061082f57607f821691505b6020821081141561085057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561087e5761087e610856565b500390565b6000821982111561089657610896610856565b50019056fea2646970667358221220b1c05e843e87a102d329d646d76b651fb54262d2ae803d40d31352741c5b2ee764736f6c63430008090033";

type WETH9ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETH9ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETH9__factory extends ContractFactory {
  constructor(...args: WETH9ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WETH9> {
    return super.deploy(overrides || {}) as Promise<WETH9>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WETH9 {
    return super.attach(address) as WETH9;
  }
  override connect(signer: Signer): WETH9__factory {
    return super.connect(signer) as WETH9__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETH9Interface {
    return new utils.Interface(_abi) as WETH9Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WETH9 {
    return new Contract(address, _abi, signerOrProvider) as WETH9;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UniswapV2Pair, UniswapV2PairInterface } from "../UniswapV2Pair";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
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
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
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
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
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
    name: "price1CumulativeLast",
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
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
];

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604080518082018252600a8152692ab734b9bbb0b8102b1960b11b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f918101919091527fbfcc8ef98ffbf7b6c3fec7bf5185b566b9863e35a9d83acd49ad6824b5969738918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201526000608082018190523060a08301529060c00160408051601f19818403018152919052805160209091012060035550600580546001600160a01b031916331790556122f3806101136000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610408578063d505accf1461041b578063dd62ed3e1461042e578063fff6cae91461045957600080fd5b8063ba9a7a56146103d9578063bc25cf77146103e2578063c45a0155146103f557600080fd5b80637ecebe00116100d35780637ecebe001461035957806389afcb441461037957806395d89b41146103a1578063a9059cbb146103c657600080fd5b80636a6278421461031d57806370a08231146103305780637464fc3d1461035057600080fd5b806323b872dd116101665780633644e515116101405780633644e515146102ef578063485cc955146102f85780635909c0d51461030b5780635a3d54931461031457600080fd5b806323b872dd1461029b57806330adf81f146102ae578063313ce567146102d557600080fd5b8063022c0d9f146101ae57806306fdde03146101c35780630902f1ac14610202578063095ea7b3146102365780630dfe16811461025957806318160ddd14610284575b600080fd5b6101c16101bc366004611e68565b610461565b005b6101ec6040518060400160405280600a8152602001692ab734b9bbb0b8102b1960b11b81525081565b6040516101f99190611f2e565b60405180910390f35b61020a610985565b604080516001600160701b03948516815293909216602084015263ffffffff16908201526060016101f9565b610249610244366004611f61565b6109af565b60405190151581526020016101f9565b60065461026c906001600160a01b031681565b6040516001600160a01b0390911681526020016101f9565b61028d60005481565b6040519081526020016101f9565b6102496102a9366004611f8d565b6109c6565b61028d7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6102dd601281565b60405160ff90911681526020016101f9565b61028d60035481565b6101c1610306366004611fce565b610a5a565b61028d60095481565b61028d600a5481565b61028d61032b366004612007565b610ad9565b61028d61033e366004612007565b60016020526000908152604090205481565b61028d600b5481565b61028d610367366004612007565b60046020526000908152604090205481565b61038c610387366004612007565b610dbc565b604080519283526020830191909152016101f9565b6101ec604051806040016040528060068152602001652aa72496ab1960d11b81525081565b6102496103d4366004611f61565b61115e565b61028d6103e881565b6101c16103f0366004612007565b61116b565b60055461026c906001600160a01b031681565b60075461026c906001600160a01b031681565b6101c1610429366004612024565b61128e565b61028d61043c366004611fce565b600260209081526000928352604080842090915290825290205481565b6101c16114a2565b600c5460011461048c5760405162461bcd60e51b81526004016104839061209b565b60405180910390fd5b6000600c558415158061049f5750600084115b6104f95760405162461bcd60e51b815260206004820152602560248201527f556e697377617056323a20494e53554646494349454e545f4f55545055545f416044820152641353d5539560da1b6064820152608401610483565b600080610504610985565b5091509150816001600160701b0316871080156105295750806001600160701b031686105b61057f5760405162461bcd60e51b815260206004820152602160248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152605960f81b6064820152608401610483565b60065460075460009182916001600160a01b039182169190811690891682148015906105bd5750806001600160a01b0316896001600160a01b031614155b6106015760405162461bcd60e51b8152602060048201526015602482015274556e697377617056323a20494e56414c49445f544f60581b6044820152606401610483565b8a1561061257610612828a8d6115e4565b891561062357610623818a8c6115e4565b8615610690576040516304347a1760e21b81526001600160a01b038a16906310d1e85c9061065d9033908f908f908e908e906004016120c6565b600060405180830381600087803b15801561067757600080fd5b505af115801561068b573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b1580156106cf57600080fd5b505afa1580156106e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107079190612112565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a082319060240160206040518083038186803b15801561074957600080fd5b505afa15801561075d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107819190612112565b92505050600089856001600160701b031661079c9190612141565b83116107a95760006107c6565b6107bc8a6001600160701b038716612141565b6107c69084612141565b905060006107dd8a6001600160701b038716612141565b83116107ea576000610807565b6107fd8a6001600160701b038716612141565b6108079084612141565b905060008211806108185750600081115b6108705760405162461bcd60e51b8152602060048201526024808201527f556e697377617056323a20494e53554646494349454e545f494e5055545f414d60448201526313d5539560e21b6064820152608401610483565b600061089261088084600361172f565b61088c876103e861172f565b90611796565b905060006108a461088084600361172f565b90506108c9620f42406108c36001600160701b038b8116908b1661172f565b9061172f565b6108d3838361172f565b10156109105760405162461bcd60e51b815260206004820152600c60248201526b556e697377617056323a204b60a01b6044820152606401610483565b505061091e848488886117ec565b60408051838152602081018390529081018c9052606081018b90526001600160a01b038a169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a350506001600c55505050505050505050565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b60006109bc3384846119d8565b5060015b92915050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610a45576001600160a01b0384166000908152600260209081526040808320338452909152902054610a209083611796565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610a50848484611a3a565b5060019392505050565b6005546001600160a01b03163314610aab5760405162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b6044820152606401610483565b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b6000600c54600114610afd5760405162461bcd60e51b81526004016104839061209b565b6000600c81905580610b0d610985565b506006546040516370a0823160e01b81523060048201529294509092506000916001600160a01b03909116906370a082319060240160206040518083038186803b158015610b5a57600080fd5b505afa158015610b6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b929190612112565b6007546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a082319060240160206040518083038186803b158015610bdb57600080fd5b505afa158015610bef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c139190612112565b90506000610c2a836001600160701b038716611796565b90506000610c41836001600160701b038716611796565b90506000610c4f8787611ae0565b60005490915080610c8657610c726103e861088c610c6d878761172f565b611c2c565b9850610c8160006103e8611c9c565b610ccd565b610cca6001600160701b038916610c9d868461172f565b610ca7919061216e565b6001600160701b038916610cbb868561172f565b610cc5919061216e565b611d2b565b98505b60008911610d2e5760405162461bcd60e51b815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152671657d3525395115160c21b6064820152608401610483565b610d388a8a611c9c565b610d4486868a8a6117ec565b8115610d6e57600854610d6a906001600160701b0380821691600160701b90041661172f565b600b555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250506001600c5550949695505050505050565b600080600c54600114610de15760405162461bcd60e51b81526004016104839061209b565b6000600c81905580610df1610985565b506006546007546040516370a0823160e01b81523060048201529395509193506001600160a01b039081169291169060009083906370a082319060240160206040518083038186803b158015610e4657600080fd5b505afa158015610e5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7e9190612112565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a082319060240160206040518083038186803b158015610ec357600080fd5b505afa158015610ed7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efb9190612112565b30600090815260016020526040812054919250610f188888611ae0565b60005490915080610f29848761172f565b610f33919061216e565b9a5080610f40848661172f565b610f4a919061216e565b995060008b118015610f5c575060008a115b610fb95760405162461bcd60e51b815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152671657d0955493915160c21b6064820152608401610483565b610fc33084611d43565b610fce878d8d6115e4565b610fd9868d8c6115e4565b6040516370a0823160e01b81523060048201526001600160a01b038816906370a082319060240160206040518083038186803b15801561101857600080fd5b505afa15801561102c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110509190612112565b6040516370a0823160e01b81523060048201529095506001600160a01b038716906370a082319060240160206040518083038186803b15801561109257600080fd5b505afa1580156110a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ca9190612112565b93506110d885858b8b6117ec565b8115611102576008546110fe906001600160701b0380821691600160701b90041661172f565b600b555b604080518c8152602081018c90526001600160a01b038e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001600c81905550915091565b60006109bc338484611a3a565b600c5460011461118d5760405162461bcd60e51b81526004016104839061209b565b6000600c556006546007546008546040516370a0823160e01b81523060048201526001600160a01b0393841693909216916112379184918691611232916001600160701b039091169084906370a08231906024015b60206040518083038186803b1580156111fa57600080fd5b505afa15801561120e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088c9190612112565b6115e4565b6008546040516370a0823160e01b8152306004820152611284918391869161123291600160701b9091046001600160701b0316906001600160a01b038516906370a08231906024016111e2565b50506001600c5550565b428410156112d35760405162461bcd60e51b8152602060048201526012602482015271155b9a5cddd85c158c8e881156141254915160721b6044820152606401610483565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b91908761132683612182565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161139f92919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561140a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906114405750886001600160a01b0316816001600160a01b0316145b61148c5760405162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e4154555245000000006044820152606401610483565b6114978989896119d8565b505050505050505050565b600c546001146114c45760405162461bcd60e51b81526004016104839061209b565b6000600c556006546040516370a0823160e01b81523060048201526115dd916001600160a01b0316906370a082319060240160206040518083038186803b15801561150e57600080fd5b505afa158015611522573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115469190612112565b6007546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b15801561158957600080fd5b505afa15801561159d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c19190612112565b6008546001600160701b0380821691600160701b9004166117ec565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691611670919061219d565b6000604051808303816000865af19150503d80600081146116ad576040519150601f19603f3d011682016040523d82523d6000602084013e6116b2565b606091505b50915091508180156116dc5750805115806116dc5750808060200190518101906116dc91906121b9565b6117285760405162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c45440000000000006044820152606401610483565b5050505050565b60008115806117535750828261174581836121db565b9250611751908361216e565b145b6109c05760405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b6044820152606401610483565b6000826117a38382612141565b91508111156109c05760405162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b6044820152606401610483565b6001600160701b03841180159061180a57506001600160701b038311155b61184c5760405162461bcd60e51b8152602060048201526013602482015272556e697377617056323a204f564552464c4f5760681b6044820152606401610483565b600061185d640100000000426121fa565b60085490915060009061187d90600160e01b900463ffffffff168361220e565b905060008163ffffffff1611801561189d57506001600160701b03841615155b80156118b157506001600160701b03831615155b15611940578063ffffffff166118d9856118ca86611dcd565b6001600160e01b031690611de6565b6001600160e01b03166118ec91906121db565b600960008282546118fd9190612233565b909155505063ffffffff8116611916846118ca87611dcd565b6001600160e01b031661192991906121db565b600a600082825461193a9190612233565b90915550505b6008805463ffffffff8416600160e01b026001600160e01b036001600160701b03898116600160701b9081026001600160e01b03199095168c83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1910160405180910390a1505050505050565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316600090815260016020526040902054611a5d9082611796565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611a8c9082611dfb565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611a2d9085815260200190565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611b3157600080fd5b505afa158015611b45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b69919061224b565b600b546001600160a01b038216158015945091925090611c18578015611c13576000611ba4610c6d6001600160701b0388811690881661172f565b90506000611bb183611c2c565b905080821115611c10576000611bd3611bca8484611796565b6000549061172f565b90506000611bec83611be686600561172f565b90611dfb565b90506000611bfa828461216e565b90508015611c0c57611c0c8782611c9c565b5050505b50505b611c24565b8015611c24576000600b555b505092915050565b60006003821115611c8d5750806000611c4660028361216e565b611c51906001612233565b90505b81811015611c8757905080600281611c6c818661216e565b611c769190612233565b611c80919061216e565b9050611c54565b50919050565b8115611c97575060015b919050565b600054611ca99082611dfb565b60009081556001600160a01b038316815260016020526040902054611cce9082611dfb565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611d1f9085815260200190565b60405180910390a35050565b6000818310611d3a5781611d3c565b825b9392505050565b6001600160a01b038216600090815260016020526040902054611d669082611796565b6001600160a01b03831660009081526001602052604081209190915554611d8d9082611796565b60009081556040518281526001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611d1f565b60006109c0600160701b6001600160701b038416612268565b6000611d3c6001600160701b03831684612297565b600082611e088382612233565b91508110156109c05760405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b6044820152606401610483565b6001600160a01b0381168114611e6557600080fd5b50565b600080600080600060808688031215611e8057600080fd5b85359450602086013593506040860135611e9981611e50565b9250606086013567ffffffffffffffff80821115611eb657600080fd5b818801915088601f830112611eca57600080fd5b813581811115611ed957600080fd5b896020828501011115611eeb57600080fd5b9699959850939650602001949392505050565b60005b83811015611f19578181015183820152602001611f01565b83811115611f28576000848401525b50505050565b6020815260008251806020840152611f4d816040850160208701611efe565b601f01601f19169190910160400192915050565b60008060408385031215611f7457600080fd5b8235611f7f81611e50565b946020939093013593505050565b600080600060608486031215611fa257600080fd5b8335611fad81611e50565b92506020840135611fbd81611e50565b929592945050506040919091013590565b60008060408385031215611fe157600080fd5b8235611fec81611e50565b91506020830135611ffc81611e50565b809150509250929050565b60006020828403121561201957600080fd5b8135611d3c81611e50565b600080600080600080600060e0888a03121561203f57600080fd5b873561204a81611e50565b9650602088013561205a81611e50565b95506040880135945060608801359350608088013560ff8116811461207e57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b602080825260119082015270155b9a5cddd85c158c8e881313d0d2d151607a1b604082015260600190565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b60006020828403121561212457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156121535761215361212b565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261217d5761217d612158565b500490565b60006000198214156121965761219661212b565b5060010190565b600082516121af818460208701611efe565b9190910192915050565b6000602082840312156121cb57600080fd5b81518015158114611d3c57600080fd5b60008160001904831182151516156121f5576121f561212b565b500290565b60008261220957612209612158565b500690565b600063ffffffff8381169083168181101561222b5761222b61212b565b039392505050565b600082198211156122465761224661212b565b500190565b60006020828403121561225d57600080fd5b8151611d3c81611e50565b60006001600160e01b038281168482168115158284048211161561228e5761228e61212b565b02949350505050565b60006001600160e01b03838116806122b1576122b1612158565b9216919091049291505056fea2646970667358221220c249463b10b18ddfc9ddb6ee0244a1c3c39dee5684704b326485beed0d7feca864736f6c63430008090033";

type UniswapV2PairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2PairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Pair__factory extends ContractFactory {
  constructor(...args: UniswapV2PairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV2Pair> {
    return super.deploy(overrides || {}) as Promise<UniswapV2Pair>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV2Pair {
    return super.attach(address) as UniswapV2Pair;
  }
  override connect(signer: Signer): UniswapV2Pair__factory {
    return super.connect(signer) as UniswapV2Pair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2PairInterface {
    return new utils.Interface(_abi) as UniswapV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Pair {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Pair;
  }
}
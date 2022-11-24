/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RouterEventEmitter,
  RouterEventEmitterInterface,
} from "../../../contracts/test/RouterEventEmitter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "Amounts",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapETHForExactTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactETHForTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107ae806100206000396000f3fe6080604052600436106100595760003560e01c806322b5841014610065578063375734d9146100875780639c91fcb5146100a7578063b05f579e146100c7578063fa3219d5146100da578063fde1adda146100fa57600080fd5b3661006057005b600080fd5b34801561007157600080fd5b5061008561008036600461045a565b61010d565b005b34801561009357600080fd5b506100856100a236600461045a565b610222565b3480156100b357600080fd5b506100856100c236600461045a565b610252565b6100856100d53660046104dc565b610282565b3480156100e657600080fd5b506100856100f536600461045a565b610394565b6100856101083660046104dc565b6103c4565b600080886001600160a01b0316638803dbee60e01b89898989898960405160240161013d9695949392919061059a565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161017b91906105d8565b600060405180830381855af49150503d80600081146101b6576040519150601f19603f3d011682016040523d82523d6000602084013e6101bb565b606091505b5091509150816101cd576101cd610613565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b381806020019051810190610202919061063f565b60405161020f91906106fd565b60405180910390a1505050505050505050565b600080886001600160a01b03166338ed173960e01b89898989898960405160240161013d9695949392919061059a565b600080886001600160a01b03166318cbafe560e01b89898989898960405160240161013d9695949392919061059a565b600080876001600160a01b031663fb3bdb4160e01b88888888886040516024016102b0959493929190610741565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516102ee91906105d8565b600060405180830381855af49150503d8060008114610329576040519150601f19603f3d011682016040523d82523d6000602084013e61032e565b606091505b50915091508161034057610340610613565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b381806020019051810190610375919061063f565b60405161038291906106fd565b60405180910390a15050505050505050565b600080886001600160a01b0316634a25d94a60e01b89898989898960405160240161013d9695949392919061059a565b600080876001600160a01b0316637ff36ab560e01b88888888886040516024016102b0959493929190610741565b80356001600160a01b038116811461040957600080fd5b919050565b60008083601f84011261042057600080fd5b50813567ffffffffffffffff81111561043857600080fd5b6020830191508360208260051b850101111561045357600080fd5b9250929050565b600080600080600080600060c0888a03121561047557600080fd5b61047e886103f2565b96506020880135955060408801359450606088013567ffffffffffffffff8111156104a857600080fd5b6104b48a828b0161040e565b90955093506104c79050608089016103f2565b915060a0880135905092959891949750929550565b60008060008060008060a087890312156104f557600080fd5b6104fe876103f2565b955060208701359450604087013567ffffffffffffffff81111561052157600080fd5b61052d89828a0161040e565b90955093506105409050606088016103f2565b9150608087013590509295509295509295565b8183526000602080850194508260005b8581101561058f576001600160a01b0361057c836103f2565b1687529582019590820190600101610563565b509495945050505050565b86815285602082015260a0604082015260006105ba60a083018688610553565b6001600160a01b039490941660608301525060800152949350505050565b6000825160005b818110156105f957602081860181015185830152016105df565b81811115610608576000828501525b509190910192915050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561065257600080fd5b825167ffffffffffffffff8082111561066a57600080fd5b818501915085601f83011261067e57600080fd5b81518181111561069057610690610629565b8060051b604051601f19603f830116810181811085821117156106b5576106b5610629565b6040529182528482019250838101850191888311156106d357600080fd5b938501935b828510156106f1578451845293850193928501926106d8565b98975050505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561073557835183529284019291840191600101610719565b50909695505050505050565b85815260806020820152600061075b608083018688610553565b6001600160a01b039490941660408301525060600152939250505056fea2646970667358221220b6908fe59fb39842b2a6e36c555b73f5826f4b680a73862d093f119ac51be45464736f6c63430008090033";

type RouterEventEmitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterEventEmitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RouterEventEmitter__factory extends ContractFactory {
  constructor(...args: RouterEventEmitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RouterEventEmitter> {
    return super.deploy(overrides || {}) as Promise<RouterEventEmitter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RouterEventEmitter {
    return super.attach(address) as RouterEventEmitter;
  }
  override connect(signer: Signer): RouterEventEmitter__factory {
    return super.connect(signer) as RouterEventEmitter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterEventEmitterInterface {
    return new utils.Interface(_abi) as RouterEventEmitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterEventEmitter {
    return new Contract(address, _abi, signerOrProvider) as RouterEventEmitter;
  }
}
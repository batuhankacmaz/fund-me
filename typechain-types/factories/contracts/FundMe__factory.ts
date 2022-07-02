/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FundMe, FundMeInterface } from "../../contracts/FundMe";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FundMe__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "MINIMUM_USD",
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
    name: "cheaperWithdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fundingAddress",
        type: "address",
      },
    ],
    name: "getAddressToAmountFunded",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getFunder",
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
    name: "getOwner",
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
    name: "getPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVersion",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200135438038062001354833981810160405281019062000037919062000120565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505062000152565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000e882620000bb565b9050919050565b620000fa81620000db565b81146200010657600080fd5b50565b6000815190506200011a81620000ef565b92915050565b600060208284031215620001395762000138620000b6565b5b6000620001498482850162000109565b91505092915050565b60805160601c6111c76200018d600039600081816102c101528181610454015281816104fa01528181610685015261087b01526111c76000f3fe6080604052600436106100865760003560e01c8063893d20e811610059578063893d20e8146101285780639e87a5cd14610153578063b60d42881461017e578063be2693f014610188578063d7b4750c1461019257610086565b80630343fb251461008b5780630d8e6e2c146100c85780633ccfd60b146100f35780636b69a592146100fd575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610b3e565b6101cf565b6040516100bf9190610b84565b60405180910390f35b3480156100d457600080fd5b506100dd610218565b6040516100ea9190610b84565b60405180910390f35b6100fb6102bf565b005b34801561010957600080fd5b506101126104e9565b60405161011f9190610b84565b60405180910390f35b34801561013457600080fd5b5061013d6104f6565b60405161014a9190610bae565b60405180910390f35b34801561015f57600080fd5b5061016861051e565b6040516101759190610c28565b60405180910390f35b610186610548565b005b610190610683565b005b34801561019e57600080fd5b506101b960048036038101906101b49190610c6f565b610911565b6040516101c69190610bae565b60405180910390f35b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354fd4d506040518163ffffffff1660e01b815260040160206040518083038186803b15801561028257600080fd5b505afa158015610296573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ba9190610cb1565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610344576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b6000805490508110156103ef57600080828154811061036957610368610cde565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505080806103e790610d3c565b915050610347565b50600067ffffffffffffffff81111561040b5761040a610d85565b5b6040519080825280602002602001820160405280156104395781602001602082028036833780820191505090505b506000908051906020019061044f929190610a34565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff164760405161049690610de5565b60006040518083038185875af1925050503d80600081146104d3576040519150601f19603f3d011682016040523d82523d6000602084013e6104d8565b606091505b50509050806104e657600080fd5b50565b6802b5e3af16b188000081565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6802b5e3af16b1880000610587600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163461095890919063ffffffff16565b10156105c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bf90610e57565b60405180910390fd5b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106179190610e77565b925050819055506000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610708576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008080548060200260200160405190810160405280929190818152602001828054801561078b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610741575b5050505050905060005b81518110156108165760008282815181106107b3576107b2610cde565b5b602002602001015190506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061080e90610d3c565b915050610795565b50600067ffffffffffffffff81111561083257610831610d85565b5b6040519080825280602002602001820160405280156108605781602001602082028036833780820191505090505b5060009080519060200190610876929190610a34565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16476040516108bd90610de5565b60006040518083038185875af1925050503d80600081146108fa576040519150601f19603f3d011682016040523d82523d6000602084013e6108ff565b606091505b505090508061090d57600080fd5b5050565b600080828154811061092657610925610cde565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008061096483610994565b90506000670de0b6b3a7640000858361097d9190610ecd565b6109879190610f56565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156109dd57600080fd5b505afa1580156109f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a159190610fff565b5050509150506402540be40081610a2c919061107a565b915050919050565b828054828255906000526020600020908101928215610aad579160200282015b82811115610aac5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610a54565b5b509050610aba9190610abe565b5090565b5b80821115610ad7576000816000905550600101610abf565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b0b82610ae0565b9050919050565b610b1b81610b00565b8114610b2657600080fd5b50565b600081359050610b3881610b12565b92915050565b600060208284031215610b5457610b53610adb565b5b6000610b6284828501610b29565b91505092915050565b6000819050919050565b610b7e81610b6b565b82525050565b6000602082019050610b996000830184610b75565b92915050565b610ba881610b00565b82525050565b6000602082019050610bc36000830184610b9f565b92915050565b6000819050919050565b6000610bee610be9610be484610ae0565b610bc9565b610ae0565b9050919050565b6000610c0082610bd3565b9050919050565b6000610c1282610bf5565b9050919050565b610c2281610c07565b82525050565b6000602082019050610c3d6000830184610c19565b92915050565b610c4c81610b6b565b8114610c5757600080fd5b50565b600081359050610c6981610c43565b92915050565b600060208284031215610c8557610c84610adb565b5b6000610c9384828501610c5a565b91505092915050565b600081519050610cab81610c43565b92915050565b600060208284031215610cc757610cc6610adb565b5b6000610cd584828501610c9c565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d4782610b6b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d7a57610d79610d0d565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610dcf600083610db4565b9150610dda82610dbf565b600082019050919050565b6000610df082610dc2565b9150819050919050565b600082825260208201905092915050565b7f596f75206e65656420746f207370656e64206d6f726520455448210000000000600082015250565b6000610e41601b83610dfa565b9150610e4c82610e0b565b602082019050919050565b60006020820190508181036000830152610e7081610e34565b9050919050565b6000610e8282610b6b565b9150610e8d83610b6b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ec257610ec1610d0d565b5b828201905092915050565b6000610ed882610b6b565b9150610ee383610b6b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f1c57610f1b610d0d565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f6182610b6b565b9150610f6c83610b6b565b925082610f7c57610f7b610f27565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610fa681610f87565b8114610fb157600080fd5b50565b600081519050610fc381610f9d565b92915050565b6000819050919050565b610fdc81610fc9565b8114610fe757600080fd5b50565b600081519050610ff981610fd3565b92915050565b600080600080600060a0868803121561101b5761101a610adb565b5b600061102988828901610fb4565b955050602061103a88828901610fea565b945050604061104b88828901610c9c565b935050606061105c88828901610c9c565b925050608061106d88828901610fb4565b9150509295509295909350565b600061108582610fc9565b915061109083610fc9565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821160008413600084131616156110cf576110ce610d0d565b5b817f8000000000000000000000000000000000000000000000000000000000000000058312600084126000841316161561110c5761110b610d0d565b5b827f8000000000000000000000000000000000000000000000000000000000000000058212600084136000841216161561114957611148610d0d565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff058212600084126000841216161561118657611185610d0d565b5b82820290509291505056fea26469706673582212200dab312990d98153add4b0b260cb7f2957a0c739eb9a67075ed252e76b748f9864736f6c63430008080033";

type FundMeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundMeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundMe__factory extends ContractFactory {
  constructor(...args: FundMeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    priceFeed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FundMe> {
    return super.deploy(priceFeed, overrides || {}) as Promise<FundMe>;
  }
  override getDeployTransaction(
    priceFeed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(priceFeed, overrides || {});
  }
  override attach(address: string): FundMe {
    return super.attach(address) as FundMe;
  }
  override connect(signer: Signer): FundMe__factory {
    return super.connect(signer) as FundMe__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundMeInterface {
    return new utils.Interface(_abi) as FundMeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundMe {
    return new Contract(address, _abi, signerOrProvider) as FundMe;
  }
}
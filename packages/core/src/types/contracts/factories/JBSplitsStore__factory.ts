/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { JBSplitsStore, JBSplitsStoreInterface } from "../JBSplitsStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IJBOperatorStore",
        name: "_operatorStore",
        type: "address",
      },
      {
        internalType: "contract IJBProjects",
        name: "_projects",
        type: "address",
      },
      {
        internalType: "contract IJBDirectory",
        name: "_directory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "INVALID_LOCKED_UNTIL",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_PROJECT_ID",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_SPLIT_PERCENT",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_TOTAL_PERCENT",
    type: "error",
  },
  {
    inputs: [],
    name: "PREVIOUS_LOCKED_SPLITS_NOT_INCLUDED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNAUTHORIZED",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "domain",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "group",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "preferClaimed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "preferAddToBalance",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lockedUntil",
            type: "uint256",
          },
          {
            internalType: "contract IJBSplitAllocator",
            name: "allocator",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct JBSplit",
        name: "split",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetSplit",
    type: "event",
  },
  {
    inputs: [],
    name: "directory",
    outputs: [
      {
        internalType: "contract IJBDirectory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorStore",
    outputs: [
      {
        internalType: "contract IJBOperatorStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projects",
    outputs: [
      {
        internalType: "contract IJBProjects",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_domain",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "group",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "preferClaimed",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "preferAddToBalance",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "percent",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "projectId",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "beneficiary",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "lockedUntil",
                type: "uint256",
              },
              {
                internalType: "contract IJBSplitAllocator",
                name: "allocator",
                type: "address",
              },
            ],
            internalType: "struct JBSplit[]",
            name: "splits",
            type: "tuple[]",
          },
        ],
        internalType: "struct JBGroupedSplits[]",
        name: "_groupedSplits",
        type: "tuple[]",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_domain",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_group",
        type: "uint256",
      },
    ],
    name: "splitsOf",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "preferClaimed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "preferAddToBalance",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lockedUntil",
            type: "uint256",
          },
          {
            internalType: "contract IJBSplitAllocator",
            name: "allocator",
            type: "address",
          },
        ],
        internalType: "struct JBSplit[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516200146e3803806200146e83398101604081905261003191610066565b6001600160a01b0392831660805290821660a0521660c0526100b3565b6001600160a01b038116811461006357600080fd5b50565b60008060006060848603121561007b57600080fd5b83516100868161004e565b60208501519093506100978161004e565b60408501519092506100a88161004e565b809150509250925092565b60805160a05160c051611371620000fd6000396000818161010d0152610253015260008181609a015261018801526000818160e6015281816105bc015261068901526113716000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ad007d6311610050578063ad007d63146100e1578063c41c2f2414610108578063f2da44b61461012f57600080fd5b806369e11cc51461006c5780638b79543c14610095575b600080fd5b61007f61007a366004610e35565b610144565b60405161008c9190610e61565b60405180910390f35b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008c565b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b6100bc7f000000000000000000000000000000000000000000000000000000000000000081565b61014261013d366004610f0e565b610159565b005b6060610151848484610347565b949350505050565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018590527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636352211e90602401602060405180830381865afa1580156101e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102089190610fb6565b6040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018690528590601290339073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa90602401602060405180830381865afa15801561029a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102be9190610fb6565b73ffffffffffffffffffffffffffffffffffffffff16146102e184848484610538565b8460005b8181101561033b57600088888381811061030157610301610fda565b90506020028101906103139190611009565b61031c9061111f565b90506103328b8b83600001518460200151610733565b506001016102e5565b50505050505050505050565b60008381526020818152604080832085845282528083208484529091528120546060918167ffffffffffffffff81111561038357610383611047565b60405190808252806020026020018201604052801561040857816020015b6040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816103a15790505b50905060005b8281101561052e5760008781526001602081815260408084208a855282528084208985528252808420858552825280842054815160e08101835260a0810186905260c081018690528185168514815281851c851690941484840152600281811c63ffffffff1685840152602282901c66ffffffffffffff166060860152605a82901c73ffffffffffffffffffffffffffffffffffffffff1660808601528c865283528185208b865283528185208a865283528185208686529092529092205480156105025765ffffffffffff811660a083015273ffffffffffffffffffffffffffffffffffffffff603082901c1660c08301525b8185858151811061051557610515610fda565b602002602001018190525083600101935050505061040e565b5095945050505050565b8015801561055c57503373ffffffffffffffffffffffffffffffffffffffff851614155b801561062957506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260448201859052606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90608401602060405180830381865afa158015610603573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106279190611253565b155b80156106f657506040517fc161c93f00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff858116602483015260006044830152606482018490527f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90608401602060405180830381865afa1580156106d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f49190611253565b155b1561072d576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6000610740858585610347565b805190915060005b818110156107db5782818151811061076257610762610fda565b602002602001015160a001514210801561079c575061079a8484838151811061078d5761078d610fda565b6020026020010151610c74565b155b156107d3576040517f1974459500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600101610748565b508251600090815b81811015610c46578581815181106107fd576107fd610fda565b602002602001015160400151600003610842576040517fe119ba4500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b66ffffffffffffff801686828151811061085e5761085e610fda565b60200260200101516060015111156108a2576040517f3b44d99200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8581815181106108b4576108b4610fda565b602002602001015160400151836108cb9190611270565b9250633b9aca0083111561090b576040517feca7361000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086828151811061091f5761091f610fda565b60200260200101516000015115610934575060015b86828151811061094657610946610fda565b6020026020010151602001511561095b576002175b600287838151811061096f5761096f610fda565b602002602001015160400151901b81179050602287838151811061099557610995610fda565b602002602001015160600151901b81179050605a8783815181106109bb576109bb610fda565b6020908102919091018101516080015160008d81526001835260408082208e835284528082208d8352845280822087835290935291822073ffffffffffffffffffffffffffffffffffffffff90911690921b92909217908190558751909190889084908110610a2c57610a2c610fda565b602002602001015160a001511180610a8e5750600073ffffffffffffffffffffffffffffffffffffffff16878381518110610a6957610a69610fda565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610b8e5765ffffffffffff8016878381518110610aae57610aae610fda565b602002602001015160a001511115610af2576040517fd509b54d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000878381518110610b0657610b06610fda565b602002602001015160a0015165ffffffffffff1690506030888481518110610b3057610b30610fda565b60209081029190910181015160c0015160008e81526002835260408082208f835284528082208e835284528082208883529093529190912073ffffffffffffffffffffffffffffffffffffffff90911690911b919091179055610be8565b60008a81526002602090815260408083208c845282528083208b8452825280832085845290915290205415610be85760008a81526002602090815260408083208c845282528083208b845282528083208584529091528120555b87898b7f1d65eeba667d8160993d485b4782f11eef3bc64186c6521f2a0801f816e752e78a8681518110610c1e57610c1e610fda565b602002602001015133604051610c359291906112aa565b60405180910390a4506001016107e3565b50600097885260208881526040808a20988a5297815287892096895295909552505050919092209190915550565b8151600090815b81811015610e28578360400151858281518110610c9a57610c9a610fda565b602002602001015160400151148015610cff5750836080015173ffffffffffffffffffffffffffffffffffffffff16858281518110610cdb57610cdb610fda565b60200260200101516080015173ffffffffffffffffffffffffffffffffffffffff16145b8015610d5757508360c0015173ffffffffffffffffffffffffffffffffffffffff16858281518110610d3357610d33610fda565b602002602001015160c0015173ffffffffffffffffffffffffffffffffffffffff16145b8015610d8357508360600151858281518110610d7557610d75610fda565b602002602001015160600151145b8015610db3575083600001511515858281518110610da357610da3610fda565b6020026020010151600001511515145b8015610de3575083602001511515858281518110610dd357610dd3610fda565b6020026020010151602001511515145b8015610e1057508360a00151858281518110610e0157610e01610fda565b602002602001015160a0015110155b15610e2057600192505050610e2f565b600101610c7b565b5060009150505b92915050565b600080600060608486031215610e4a57600080fd5b505081359360208301359350604090920135919050565b6020808252825182820181905260009190848201906040850190845b81811015610f0257610eef8385518051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b9284019260e09290920191600101610e7d565b50909695505050505050565b60008060008060608587031215610f2457600080fd5b8435935060208501359250604085013567ffffffffffffffff80821115610f4a57600080fd5b818701915087601f830112610f5e57600080fd5b813581811115610f6d57600080fd5b8860208260051b8501011115610f8257600080fd5b95989497505060200194505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610fb357600080fd5b50565b600060208284031215610fc857600080fd5b8151610fd381610f91565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc183360301811261103d57600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561109957611099611047565b60405290565b60405160e0810167ffffffffffffffff8111828210171561109957611099611047565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561110957611109611047565b604052919050565b8015158114610fb357600080fd5b6000604080833603121561113257600080fd5b61113a611076565b8335815260208085013567ffffffffffffffff8082111561115a57600080fd5b9086019036601f83011261116d57600080fd5b81358181111561117f5761117f611047565b61118d848260051b016110c2565b818152848101925060e09182028401850191368311156111ac57600080fd5b938501935b82851015611240578085360312156111c95760008081fd5b6111d161109f565b85356111dc81611111565b8152858701356111eb81611111565b8188015285890135898201526060808701359082015260808087013561121081610f91565b9082015260a0868101359082015260c08087013561122d81610f91565b90820152845293840193928501926111b1565b5093850193909352509195945050505050565b60006020828403121561126557600080fd5b8151610fd381611111565b80820180821115610e2f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610100810161131882858051151582526020810151151560208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff808216608085015260a083015160a08501528060c08401511660c085015250505050565b73ffffffffffffffffffffffffffffffffffffffff831660e0830152939250505056fea26469706673582212201fdfee85fdb63ce17eb2c89f54fc6179a7c22824b55ac84ea0aacc64b61fe70264736f6c63430008100033";

type JBSplitsStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBSplitsStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBSplitsStore__factory extends ContractFactory {
  constructor(...args: JBSplitsStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _operatorStore: string,
    _projects: string,
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBSplitsStore> {
    return super.deploy(
      _operatorStore,
      _projects,
      _directory,
      overrides || {}
    ) as Promise<JBSplitsStore>;
  }
  override getDeployTransaction(
    _operatorStore: string,
    _projects: string,
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _operatorStore,
      _projects,
      _directory,
      overrides || {}
    );
  }
  override attach(address: string): JBSplitsStore {
    return super.attach(address) as JBSplitsStore;
  }
  override connect(signer: Signer): JBSplitsStore__factory {
    return super.connect(signer) as JBSplitsStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBSplitsStoreInterface {
    return new utils.Interface(_abi) as JBSplitsStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBSplitsStore {
    return new Contract(address, _abi, signerOrProvider) as JBSplitsStore;
  }
}

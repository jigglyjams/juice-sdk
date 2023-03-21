/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JBMigrationOperator,
  JBMigrationOperatorInterface,
} from "../JBMigrationOperator";

const _abi = [
  {
    inputs: [
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
    name: "UNAUTHORIZED",
    type: "error",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "contract IJBMigratable",
        name: "_newController",
        type: "address",
      },
      {
        internalType: "contract IJBPaymentTerminal",
        name: "_newJbTerminal",
        type: "address",
      },
      {
        internalType: "contract IJBPayoutRedemptionPaymentTerminal",
        name: "_oldJbTerminal",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161075338038061075383398101604081905261002f916100c7565b6001600160a01b0381166080819052604080516322de550f60e21b81529051638b79543c916004808201926020929091908290030181865afa158015610079573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061009d91906100c7565b6001600160a01b031660a052506100eb565b6001600160a01b03811681146100c457600080fd5b50565b6000602082840312156100d957600080fd5b81516100e4816100af565b9392505050565b60805160a05161063061012360003960008181604b015261011801526000818160b00152818161020201526103a501526106306000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638b79543c14610046578063be7cc64e14610096578063c41c2f24146100ab575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a96100a43660046104d7565b6100d2565b005b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101859052339073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636352211e90602401602060405180830381865afa15801561015f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610183919061052a565b73ffffffffffffffffffffffffffffffffffffffff16146101d0576040517f075fd2b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018590526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635dd8f6aa90602401602060405180830381865afa15801561025e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610282919061052a565b6040517f405b84fa0000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff86811660248301529192509082169063405b84fa90604401600060405180830381600087803b1580156102f657600080fd5b505af115801561030a573d6000803e3d6000fd5b50600092506001915061031a9050565b604051908082528060200260200182016040528015610343578160200160208202803683370190505b509050838160008151811061035a5761035a61054e565b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101526040517f821b9fd80000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000009091169063821b9fd8906103de908990859060040161057d565b600060405180830381600087803b1580156103f857600080fd5b505af115801561040c573d6000803e3d6000fd5b50506040517f405b84fa0000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff87811660248301528616925063405b84fa91506044016020604051808303816000875af1158015610485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a991906105e1565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146104d457600080fd5b50565b600080600080608085870312156104ed57600080fd5b8435935060208501356104ff816104b2565b9250604085013561050f816104b2565b9150606085013561051f816104b2565b939692955090935050565b60006020828403121561053c57600080fd5b8151610547816104b2565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156105d457845173ffffffffffffffffffffffffffffffffffffffff16835293830193918301916001016105a2565b5090979650505050505050565b6000602082840312156105f357600080fd5b505191905056fea2646970667358221220ddfa44aeebda97bf24b8e069d2924f03ef5bc155fb6520d75f1211f6899def7764736f6c63430008100033";

type JBMigrationOperatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBMigrationOperatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBMigrationOperator__factory extends ContractFactory {
  constructor(...args: JBMigrationOperatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBMigrationOperator> {
    return super.deploy(
      _directory,
      overrides || {}
    ) as Promise<JBMigrationOperator>;
  }
  override getDeployTransaction(
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_directory, overrides || {});
  }
  override attach(address: string): JBMigrationOperator {
    return super.attach(address) as JBMigrationOperator;
  }
  override connect(signer: Signer): JBMigrationOperator__factory {
    return super.connect(signer) as JBMigrationOperator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBMigrationOperatorInterface {
    return new utils.Interface(_abi) as JBMigrationOperatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBMigrationOperator {
    return new Contract(address, _abi, signerOrProvider) as JBMigrationOperator;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JB7DayReconfigurationBufferBallot,
  JB7DayReconfigurationBufferBallotInterface,
} from "../../../../../../../../contracts-v2/deployments/mainnet/JB7DayReconfigurationBufferBallot";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "contract IJBFundingCycleStore",
        name: "_fundingCycleStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "configuration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum JBBallotState",
        name: "ballotState",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Finalize",
    type: "event",
  },
  {
    inputs: [],
    name: "duration",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "finalState",
    outputs: [
      {
        internalType: "enum JBBallotState",
        name: "",
        type: "uint8",
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
        name: "_configured",
        type: "uint256",
      },
    ],
    name: "finalize",
    outputs: [
      {
        internalType: "enum JBBallotState",
        name: "ballotState",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundingCycleStore",
    outputs: [
      {
        internalType: "contract IJBFundingCycleStore",
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
        name: "_configured",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "stateOf",
    outputs: [
      {
        internalType: "enum JBBallotState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161080c38038061080c83398101604081905261002f9161004a565b60809190915260601b6001600160601b03191660a052610087565b6000806040838503121561005d57600080fd5b825160208401519092506001600160a01b038116811461007c57600080fd5b809150509250929050565b60805160a05160601c6107516100bb6000396000818160d9015261035d01526000818160a401526102bd01526107516000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806374167907116100505780637416790714610120578063a994c09f14610140578063b6013cef1461016b57600080fd5b806301ffc9a7146100775780630fb5a6b41461009f578063557e7155146100d4575b600080fd5b61008a61008536600461050b565b61017e565b60405190151581526020015b60405180910390f35b6100c67f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610096565b6100fb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610096565b61013361012e3660046105ef565b610263565b604051610096919061061b565b61013361014e3660046105cd565b600060208181529281526040808220909352908152205460ff1681565b6101336101793660046105cd565b61030d565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4aeb8d2500000000000000000000000000000000000000000000000000000000148061021157507fffffffff0000000000000000000000000000000000000000000000000000000082167f7ba3dfb300000000000000000000000000000000000000000000000000000000145b8061025d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60008060008581526020818152604080832087845290915290205460ff166002811115610292576102926106ec565b146102b8575060008381526020818152604080832085845290915290205460ff16610306565b6102e27f0000000000000000000000000000000000000000000000000000000000000000846106ad565b42101561030257814210156102f85760006102fb565b60025b9050610306565b5060015b9392505050565b6040517f669e48aa0000000000000000000000000000000000000000000000000000000081526004810183905260248101829052600090819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063669e48aa906044016101206040518083038186803b1580156103a057600080fd5b505afa1580156103b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d8919061054d565b60008581526020818152604080832087845290915281205460ff16935090915082600281111561040a5761040a6106ec565b14156104db5761041f84848360600151610263565b91506000826002811115610435576104356106ec565b146104db57600084815260208181526040808320868452909152902080548391907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600281111561048c5761048c6106ec565b02179055508160028111156104a3576104a36106ec565b604051338152849086907f7e3b0e79d754a8d4c902d51b0deb131c43d7a702f465413e38db25cf786b0b349060200160405180910390a45b5092915050565b805173ffffffffffffffffffffffffffffffffffffffff8116811461050657600080fd5b919050565b60006020828403121561051d57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461030657600080fd5b6000610120828403121561056057600080fd5b61056861065c565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526105b460e084016104e2565b60e0820152610100928301519281019290925250919050565b600080604083850312156105e057600080fd5b50508035926020909101359150565b60008060006060848603121561060457600080fd5b505081359360208301359350604090920135919050565b6020810160038310610656577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b604051610120810167ffffffffffffffff811182821017156106a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b600082198211156106e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220b4c451762a49327da15d0f73731945f302ac28b4c7176ec1fd7268bced594b7b64736f6c63430008060033";

type JB7DayReconfigurationBufferBallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JB7DayReconfigurationBufferBallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JB7DayReconfigurationBufferBallot__factory extends ContractFactory {
  constructor(...args: JB7DayReconfigurationBufferBallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _duration: BigNumberish,
    _fundingCycleStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JB7DayReconfigurationBufferBallot> {
    return super.deploy(
      _duration,
      _fundingCycleStore,
      overrides || {}
    ) as Promise<JB7DayReconfigurationBufferBallot>;
  }
  override getDeployTransaction(
    _duration: BigNumberish,
    _fundingCycleStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _duration,
      _fundingCycleStore,
      overrides || {}
    );
  }
  override attach(address: string): JB7DayReconfigurationBufferBallot {
    return super.attach(address) as JB7DayReconfigurationBufferBallot;
  }
  override connect(signer: Signer): JB7DayReconfigurationBufferBallot__factory {
    return super.connect(signer) as JB7DayReconfigurationBufferBallot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JB7DayReconfigurationBufferBallotInterface {
    return new utils.Interface(
      _abi
    ) as JB7DayReconfigurationBufferBallotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JB7DayReconfigurationBufferBallot {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as JB7DayReconfigurationBufferBallot;
  }
}

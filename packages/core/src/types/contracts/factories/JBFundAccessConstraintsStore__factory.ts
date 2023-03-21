/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JBFundAccessConstraintsStore,
  JBFundAccessConstraintsStoreInterface,
} from "../JBFundAccessConstraintsStore";

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
    name: "CONTROLLER_UNAUTHORIZED",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_DISTRIBUTION_LIMIT",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_DISTRIBUTION_LIMIT_CURRENCY",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_OVERFLOW_ALLOWANCE",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_OVERFLOW_ALLOWANCE_CURRENCY",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fundingCycleConfiguration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "contract IJBPaymentTerminal",
            name: "terminal",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "distributionLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "distributionLimitCurrency",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "overflowAllowance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "overflowAllowanceCurrency",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct JBFundAccessConstraints",
        name: "constraints",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetFundAccessConstraints",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_configuration",
        type: "uint256",
      },
      {
        internalType: "contract IJBPaymentTerminal",
        name: "_terminal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "distributionLimitOf",
    outputs: [
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
        name: "_configuration",
        type: "uint256",
      },
      {
        internalType: "contract IJBPaymentTerminal",
        name: "_terminal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "overflowAllowanceOf",
    outputs: [
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
        name: "_configuration",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "contract IJBPaymentTerminal",
            name: "terminal",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "distributionLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "distributionLimitCurrency",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "overflowAllowance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "overflowAllowanceCurrency",
            type: "uint256",
          },
        ],
        internalType: "struct JBFundAccessConstraints[]",
        name: "_fundAccessConstraints",
        type: "tuple[]",
      },
    ],
    name: "setFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
  "0x60a060405234801561001057600080fd5b5060405161089a38038061089a83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516108086100926000396000818161011d01526101d001526108086000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806334002f31146100955780637a81b562146100aa578063c41c2f2414610118578063e8db213014610157575b600080fd5b61008061006a366004610600565b6001600160e01b0319166301ffc9a760e01b1490565b60405190151581526020015b60405180910390f35b6100a86100a3366004610631565b6101ae565b005b6101036100b83660046106cc565b60009384526001602090815260408086209486529381528385206001600160a01b039384168652815283852091909216845290529020546001600160e81b0381169160e89190911c90565b6040805192835260208301919091520161008c565b61013f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161008c565b6101036101653660046106cc565b6000938452602084815260408086209486529381528385206001600160a01b039384168652815283852091909216845290529020546001600160e81b0381169160e89190911c90565b604051632eec7b5560e11b815260048101859052849033906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa90602401602060405180830381865afa158015610217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023b9190610716565b6001600160a01b03161461026257604051632adfdd0560e21b815260040160405180910390fd5b8160005b818110156105f7576001600160e81b0385858381811061028857610288610733565b905060c002016040013511156102b15760405163a9b8fbcf60e01b815260040160405180910390fd5b62ffffff8585838181106102c7576102c7610733565b905060c002016060013511156102f057604051639583faed60e01b815260040160405180910390fd5b6001600160e81b0385858381811061030a5761030a610733565b905060c0020160800135111561033357604051635730278360e01b815260040160405180910390fd5b62ffffff85858381811061034957610349610733565b905060c0020160a0013511156103725760405163d9b93c2560e01b815260040160405180910390fd5b600085858381811061038657610386610733565b905060c002016040013511156104875760e88585838181106103aa576103aa610733565b905060c0020160600135901b8585838181106103c8576103c8610733565b905060c0020160400135176000808981526020019081526020016000206000888152602001908152602001600020600087878581811061040a5761040a610733565b61042092602060c0909202019081019150610749565b6001600160a01b03166001600160a01b03168152602001908152602001600020600087878581811061045457610454610733565b905060c00201602001602081019061046c9190610749565b6001600160a01b031681526020810191909152604001600020555b600085858381811061049b5761049b610733565b905060c0020160800135111561059d5760e88585838181106104bf576104bf610733565b905060c0020160a00135901b8585838181106104dd576104dd610733565b905060c002016080013517600160008981526020019081526020016000206000888152602001908152602001600020600087878581811061052057610520610733565b61053692602060c0909202019081019150610749565b6001600160a01b03166001600160a01b03168152602001908152602001600020600087878581811061056a5761056a610733565b905060c0020160200160208101906105829190610749565b6001600160a01b031681526020810191909152604001600020555b86867f26f78d7903ac64ef9b38a2bf94b365f364f28efa245a6b67bcc27350f141c5f78787858181106105d2576105d2610733565b905060c00201336040516105e7929190610766565b60405180910390a3600101610266565b50505050505050565b60006020828403121561061257600080fd5b81356001600160e01b03198116811461062a57600080fd5b9392505050565b6000806000806060858703121561064757600080fd5b8435935060208501359250604085013567ffffffffffffffff8082111561066d57600080fd5b818701915087601f83011261068157600080fd5b81358181111561069057600080fd5b88602060c0830285010111156106a557600080fd5b95989497505060200194505050565b6001600160a01b03811681146106c957600080fd5b50565b600080600080608085870312156106e257600080fd5b843593506020850135925060408501356106fb816106b4565b9150606085013561070b816106b4565b939692955090935050565b60006020828403121561072857600080fd5b815161062a816106b4565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561075b57600080fd5b813561062a816106b4565b60e081018335610775816106b4565b6001600160a01b039081168352602085013590610791826106b4565b808216602085015260408601356040850152606086013560608501526080860135608085015260a086013560a085015280851660c08501525050939250505056fea2646970667358221220d48b3bfe3a0a848bde3709f11e8e1247e5476771e0a8516e58199e6c432757f364736f6c63430008100033";

type JBFundAccessConstraintsStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBFundAccessConstraintsStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBFundAccessConstraintsStore__factory extends ContractFactory {
  constructor(...args: JBFundAccessConstraintsStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBFundAccessConstraintsStore> {
    return super.deploy(
      _directory,
      overrides || {}
    ) as Promise<JBFundAccessConstraintsStore>;
  }
  override getDeployTransaction(
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_directory, overrides || {});
  }
  override attach(address: string): JBFundAccessConstraintsStore {
    return super.attach(address) as JBFundAccessConstraintsStore;
  }
  override connect(signer: Signer): JBFundAccessConstraintsStore__factory {
    return super.connect(signer) as JBFundAccessConstraintsStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBFundAccessConstraintsStoreInterface {
    return new utils.Interface(_abi) as JBFundAccessConstraintsStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBFundAccessConstraintsStore {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as JBFundAccessConstraintsStore;
  }
}

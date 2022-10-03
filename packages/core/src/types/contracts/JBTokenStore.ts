/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface JBTokenStoreInterface extends utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "burnFrom(address,uint256,uint256,bool)": FunctionFragment;
    "claimFor(address,uint256,uint256)": FunctionFragment;
    "directory()": FunctionFragment;
    "fundingCycleStore()": FunctionFragment;
    "issueFor(uint256,string,string)": FunctionFragment;
    "mintFor(address,uint256,uint256,bool)": FunctionFragment;
    "operatorStore()": FunctionFragment;
    "projects()": FunctionFragment;
    "setFor(uint256,address)": FunctionFragment;
    "tokenOf(uint256)": FunctionFragment;
    "totalSupplyOf(uint256)": FunctionFragment;
    "transferFrom(address,uint256,address,uint256)": FunctionFragment;
    "unclaimedBalanceOf(address,uint256)": FunctionFragment;
    "unclaimedTotalSupplyOf(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "burnFrom"
      | "claimFor"
      | "directory"
      | "fundingCycleStore"
      | "issueFor"
      | "mintFor"
      | "operatorStore"
      | "projects"
      | "setFor"
      | "tokenOf"
      | "totalSupplyOf"
      | "transferFrom"
      | "unclaimedBalanceOf"
      | "unclaimedTotalSupplyOf"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFor",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "directory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundingCycleStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issueFor",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintFor",
    values: [string, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "projects", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFor",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedBalanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedTotalSupplyOf",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "directory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingCycleStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issueFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedTotalSupplyOf",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,uint256,uint256,uint256,uint256,bool,address)": EventFragment;
    "Claim(address,uint256,uint256,uint256,address)": EventFragment;
    "Issue(uint256,address,string,string,address)": EventFragment;
    "Mint(address,uint256,uint256,bool,bool,address)": EventFragment;
    "Set(uint256,address,address)": EventFragment;
    "Transfer(address,uint256,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Issue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Set"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface BurnEventObject {
  holder: string;
  projectId: BigNumber;
  amount: BigNumber;
  initialUnclaimedBalance: BigNumber;
  initialClaimedBalance: BigNumber;
  preferClaimedTokens: boolean;
  caller: string;
}
export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, boolean, string],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface ClaimEventObject {
  holder: string;
  projectId: BigNumber;
  initialUnclaimedBalance: BigNumber;
  amount: BigNumber;
  caller: string;
}
export type ClaimEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, string],
  ClaimEventObject
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface IssueEventObject {
  projectId: BigNumber;
  token: string;
  name: string;
  symbol: string;
  caller: string;
}
export type IssueEvent = TypedEvent<
  [BigNumber, string, string, string, string],
  IssueEventObject
>;

export type IssueEventFilter = TypedEventFilter<IssueEvent>;

export interface MintEventObject {
  holder: string;
  projectId: BigNumber;
  amount: BigNumber;
  tokensWereClaimed: boolean;
  preferClaimedTokens: boolean;
  caller: string;
}
export type MintEvent = TypedEvent<
  [string, BigNumber, BigNumber, boolean, boolean, string],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SetEventObject {
  projectId: BigNumber;
  newToken: string;
  caller: string;
}
export type SetEvent = TypedEvent<[BigNumber, string, string], SetEventObject>;

export type SetEventFilter = TypedEventFilter<SetEvent>;

export interface TransferEventObject {
  holder: string;
  projectId: BigNumber;
  recipient: string;
  amount: BigNumber;
  caller: string;
}
export type TransferEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface JBTokenStore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBTokenStoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     * The total balance of tokens a holder has for a specified project, including claimed and unclaimed tokens.
     * @param _holder The token holder to get a balance for.
     * @param _projectId The project to get the `_holder`s balance of.
     */
    balanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    /**
     * Only a project's current controller can burn its tokens.
     * Burns a project's tokens.
     * @param _amount The amount of tokens to burn.
     * @param _holder The address that owns the tokens being burned.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for tokens to burned from the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the burned tokens belong.
     */
    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Only a token holder or an operator specified by the token holder can claim its unclaimed tokens.
     * Claims internally accounted for tokens into a holder's wallet.
     * @param _amount The amount of tokens to claim.
     * @param _holder The owner of the tokens being claimed.
     * @param _projectId The ID of the project whose tokens are being claimed.
     */
    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     *  The directory of terminals and controllers for projects.
     */
    directory(overrides?: CallOverrides): Promise<[string]>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Deploys a project's ERC-20 token contract.Only a project's owner or operator can issue its token.
     * Issues a project's ERC-20 tokens that'll be used when claiming tokens.
     * @param _name The ERC-20's name.
     * @param _projectId The ID of the project being issued tokens.
     * @param _symbol The ERC-20's symbol.
     */
    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Only a project's current controller can mint its tokens.
     * Mint new project tokens.
     * @param _amount The amount of tokens to mint.
     * @param _holder The address receiving the new tokens.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for minted tokens to be claimed automatically into the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the tokens belong.
     */
    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Only a project's owner or operator can set its token.
     * Set a project's token if not already set.
     * @param _projectId The ID of the project to which the set token belongs.
     * @param _token The new token.
     */
    setFor(
      _projectId: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Each project's attached token contract. _projectId The ID of the project to which the token belongs.
     */
    tokenOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    /**
     * The total supply of tokens for each project, including claimed and unclaimed tokens.
     * @param _projectId The ID of the project to get the total token supply of.
     */
    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalSupply: BigNumber }>;

    /**
     * Only a token holder or an operator can transfer its unclaimed tokens.
     * Allows a holder to transfer unclaimed tokens to another account.
     * @param _amount The amount of tokens to transfer.
     * @param _holder The address to transfer tokens from.
     * @param _projectId The ID of the project whose tokens are being transferred.
     * @param _recipient The recipient of the tokens.
     */
    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Each holder's balance of unclaimed tokens for each project. _holder The holder of balance. _projectId The ID of the project to which the token belongs.
     */
    unclaimedBalanceOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * The total supply of unclaimed tokens for each project. _projectId The ID of the project to which the token belongs.
     */
    unclaimedTotalSupplyOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  /**
   * The total balance of tokens a holder has for a specified project, including claimed and unclaimed tokens.
   * @param _holder The token holder to get a balance for.
   * @param _projectId The project to get the `_holder`s balance of.
   */
  balanceOf(
    _holder: string,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Only a project's current controller can burn its tokens.
   * Burns a project's tokens.
   * @param _amount The amount of tokens to burn.
   * @param _holder The address that owns the tokens being burned.
   * @param _preferClaimedTokens A flag indicating whether there's a preference for tokens to burned from the `_holder`s wallet if the project currently has a token contract attached.
   * @param _projectId The ID of the project to which the burned tokens belong.
   */
  burnFrom(
    _holder: string,
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _preferClaimedTokens: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Only a token holder or an operator specified by the token holder can claim its unclaimed tokens.
   * Claims internally accounted for tokens into a holder's wallet.
   * @param _amount The amount of tokens to claim.
   * @param _holder The owner of the tokens being claimed.
   * @param _projectId The ID of the project whose tokens are being claimed.
   */
  claimFor(
    _holder: string,
    _projectId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   *  The directory of terminals and controllers for projects.
   */
  directory(overrides?: CallOverrides): Promise<string>;

  /**
   * The contract storing all funding cycle configurations.
   */
  fundingCycleStore(overrides?: CallOverrides): Promise<string>;

  /**
   * Deploys a project's ERC-20 token contract.Only a project's owner or operator can issue its token.
   * Issues a project's ERC-20 tokens that'll be used when claiming tokens.
   * @param _name The ERC-20's name.
   * @param _projectId The ID of the project being issued tokens.
   * @param _symbol The ERC-20's symbol.
   */
  issueFor(
    _projectId: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Only a project's current controller can mint its tokens.
   * Mint new project tokens.
   * @param _amount The amount of tokens to mint.
   * @param _holder The address receiving the new tokens.
   * @param _preferClaimedTokens A flag indicating whether there's a preference for minted tokens to be claimed automatically into the `_holder`s wallet if the project currently has a token contract attached.
   * @param _projectId The ID of the project to which the tokens belong.
   */
  mintFor(
    _holder: string,
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _preferClaimedTokens: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   *  A contract storing operator assignments.
   */
  operatorStore(overrides?: CallOverrides): Promise<string>;

  /**
   * Mints ERC-721's that represent project ownership and transfers.
   */
  projects(overrides?: CallOverrides): Promise<string>;

  /**
   * Only a project's owner or operator can set its token.
   * Set a project's token if not already set.
   * @param _projectId The ID of the project to which the set token belongs.
   * @param _token The new token.
   */
  setFor(
    _projectId: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Each project's attached token contract. _projectId The ID of the project to which the token belongs.
   */
  tokenOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * The total supply of tokens for each project, including claimed and unclaimed tokens.
   * @param _projectId The ID of the project to get the total token supply of.
   */
  totalSupplyOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Only a token holder or an operator can transfer its unclaimed tokens.
   * Allows a holder to transfer unclaimed tokens to another account.
   * @param _amount The amount of tokens to transfer.
   * @param _holder The address to transfer tokens from.
   * @param _projectId The ID of the project whose tokens are being transferred.
   * @param _recipient The recipient of the tokens.
   */
  transferFrom(
    _holder: string,
    _projectId: BigNumberish,
    _recipient: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Each holder's balance of unclaimed tokens for each project. _holder The holder of balance. _projectId The ID of the project to which the token belongs.
   */
  unclaimedBalanceOf(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * The total supply of unclaimed tokens for each project. _projectId The ID of the project to which the token belongs.
   */
  unclaimedTotalSupplyOf(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    /**
     * The total balance of tokens a holder has for a specified project, including claimed and unclaimed tokens.
     * @param _holder The token holder to get a balance for.
     * @param _projectId The project to get the `_holder`s balance of.
     */
    balanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Only a project's current controller can burn its tokens.
     * Burns a project's tokens.
     * @param _amount The amount of tokens to burn.
     * @param _holder The address that owns the tokens being burned.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for tokens to burned from the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the burned tokens belong.
     */
    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Only a token holder or an operator specified by the token holder can claim its unclaimed tokens.
     * Claims internally accounted for tokens into a holder's wallet.
     * @param _amount The amount of tokens to claim.
     * @param _holder The owner of the tokens being claimed.
     * @param _projectId The ID of the project whose tokens are being claimed.
     */
    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     *  The directory of terminals and controllers for projects.
     */
    directory(overrides?: CallOverrides): Promise<string>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<string>;

    /**
     * Deploys a project's ERC-20 token contract.Only a project's owner or operator can issue its token.
     * Issues a project's ERC-20 tokens that'll be used when claiming tokens.
     * @param _name The ERC-20's name.
     * @param _projectId The ID of the project being issued tokens.
     * @param _symbol The ERC-20's symbol.
     */
    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Only a project's current controller can mint its tokens.
     * Mint new project tokens.
     * @param _amount The amount of tokens to mint.
     * @param _holder The address receiving the new tokens.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for minted tokens to be claimed automatically into the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the tokens belong.
     */
    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<string>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<string>;

    /**
     * Only a project's owner or operator can set its token.
     * Set a project's token if not already set.
     * @param _projectId The ID of the project to which the set token belongs.
     * @param _token The new token.
     */
    setFor(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Each project's attached token contract. _projectId The ID of the project to which the token belongs.
     */
    tokenOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * The total supply of tokens for each project, including claimed and unclaimed tokens.
     * @param _projectId The ID of the project to get the total token supply of.
     */
    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Only a token holder or an operator can transfer its unclaimed tokens.
     * Allows a holder to transfer unclaimed tokens to another account.
     * @param _amount The amount of tokens to transfer.
     * @param _holder The address to transfer tokens from.
     * @param _projectId The ID of the project whose tokens are being transferred.
     * @param _recipient The recipient of the tokens.
     */
    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Each holder's balance of unclaimed tokens for each project. _holder The holder of balance. _projectId The ID of the project to which the token belongs.
     */
    unclaimedBalanceOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * The total supply of unclaimed tokens for each project. _projectId The ID of the project to which the token belongs.
     */
    unclaimedTotalSupplyOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Burn(address,uint256,uint256,uint256,uint256,bool,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      initialUnclaimedBalance?: null,
      initialClaimedBalance?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): BurnEventFilter;
    Burn(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      initialUnclaimedBalance?: null,
      initialClaimedBalance?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): BurnEventFilter;

    "Claim(address,uint256,uint256,uint256,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      initialUnclaimedBalance?: null,
      amount?: null,
      caller?: null
    ): ClaimEventFilter;
    Claim(
      holder?: string | null,
      projectId?: BigNumberish | null,
      initialUnclaimedBalance?: null,
      amount?: null,
      caller?: null
    ): ClaimEventFilter;

    "Issue(uint256,address,string,string,address)"(
      projectId?: BigNumberish | null,
      token?: string | null,
      name?: null,
      symbol?: null,
      caller?: null
    ): IssueEventFilter;
    Issue(
      projectId?: BigNumberish | null,
      token?: string | null,
      name?: null,
      symbol?: null,
      caller?: null
    ): IssueEventFilter;

    "Mint(address,uint256,uint256,bool,bool,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      tokensWereClaimed?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): MintEventFilter;
    Mint(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      tokensWereClaimed?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): MintEventFilter;

    "Set(uint256,address,address)"(
      projectId?: BigNumberish | null,
      newToken?: string | null,
      caller?: null
    ): SetEventFilter;
    Set(
      projectId?: BigNumberish | null,
      newToken?: string | null,
      caller?: null
    ): SetEventFilter;

    "Transfer(address,uint256,address,uint256,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      recipient?: string | null,
      amount?: null,
      caller?: null
    ): TransferEventFilter;
    Transfer(
      holder?: string | null,
      projectId?: BigNumberish | null,
      recipient?: string | null,
      amount?: null,
      caller?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    /**
     * The total balance of tokens a holder has for a specified project, including claimed and unclaimed tokens.
     * @param _holder The token holder to get a balance for.
     * @param _projectId The project to get the `_holder`s balance of.
     */
    balanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Only a project's current controller can burn its tokens.
     * Burns a project's tokens.
     * @param _amount The amount of tokens to burn.
     * @param _holder The address that owns the tokens being burned.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for tokens to burned from the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the burned tokens belong.
     */
    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Only a token holder or an operator specified by the token holder can claim its unclaimed tokens.
     * Claims internally accounted for tokens into a holder's wallet.
     * @param _amount The amount of tokens to claim.
     * @param _holder The owner of the tokens being claimed.
     * @param _projectId The ID of the project whose tokens are being claimed.
     */
    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     *  The directory of terminals and controllers for projects.
     */
    directory(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Deploys a project's ERC-20 token contract.Only a project's owner or operator can issue its token.
     * Issues a project's ERC-20 tokens that'll be used when claiming tokens.
     * @param _name The ERC-20's name.
     * @param _projectId The ID of the project being issued tokens.
     * @param _symbol The ERC-20's symbol.
     */
    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Only a project's current controller can mint its tokens.
     * Mint new project tokens.
     * @param _amount The amount of tokens to mint.
     * @param _holder The address receiving the new tokens.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for minted tokens to be claimed automatically into the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the tokens belong.
     */
    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Only a project's owner or operator can set its token.
     * Set a project's token if not already set.
     * @param _projectId The ID of the project to which the set token belongs.
     * @param _token The new token.
     */
    setFor(
      _projectId: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Each project's attached token contract. _projectId The ID of the project to which the token belongs.
     */
    tokenOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * The total supply of tokens for each project, including claimed and unclaimed tokens.
     * @param _projectId The ID of the project to get the total token supply of.
     */
    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Only a token holder or an operator can transfer its unclaimed tokens.
     * Allows a holder to transfer unclaimed tokens to another account.
     * @param _amount The amount of tokens to transfer.
     * @param _holder The address to transfer tokens from.
     * @param _projectId The ID of the project whose tokens are being transferred.
     * @param _recipient The recipient of the tokens.
     */
    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Each holder's balance of unclaimed tokens for each project. _holder The holder of balance. _projectId The ID of the project to which the token belongs.
     */
    unclaimedBalanceOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * The total supply of unclaimed tokens for each project. _projectId The ID of the project to which the token belongs.
     */
    unclaimedTotalSupplyOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * The total balance of tokens a holder has for a specified project, including claimed and unclaimed tokens.
     * @param _holder The token holder to get a balance for.
     * @param _projectId The project to get the `_holder`s balance of.
     */
    balanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Only a project's current controller can burn its tokens.
     * Burns a project's tokens.
     * @param _amount The amount of tokens to burn.
     * @param _holder The address that owns the tokens being burned.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for tokens to burned from the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the burned tokens belong.
     */
    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Only a token holder or an operator specified by the token holder can claim its unclaimed tokens.
     * Claims internally accounted for tokens into a holder's wallet.
     * @param _amount The amount of tokens to claim.
     * @param _holder The owner of the tokens being claimed.
     * @param _projectId The ID of the project whose tokens are being claimed.
     */
    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     *  The directory of terminals and controllers for projects.
     */
    directory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * The contract storing all funding cycle configurations.
     */
    fundingCycleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Deploys a project's ERC-20 token contract.Only a project's owner or operator can issue its token.
     * Issues a project's ERC-20 tokens that'll be used when claiming tokens.
     * @param _name The ERC-20's name.
     * @param _projectId The ID of the project being issued tokens.
     * @param _symbol The ERC-20's symbol.
     */
    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Only a project's current controller can mint its tokens.
     * Mint new project tokens.
     * @param _amount The amount of tokens to mint.
     * @param _holder The address receiving the new tokens.
     * @param _preferClaimedTokens A flag indicating whether there's a preference for minted tokens to be claimed automatically into the `_holder`s wallet if the project currently has a token contract attached.
     * @param _projectId The ID of the project to which the tokens belong.
     */
    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     *  A contract storing operator assignments.
     */
    operatorStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Mints ERC-721's that represent project ownership and transfers.
     */
    projects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Only a project's owner or operator can set its token.
     * Set a project's token if not already set.
     * @param _projectId The ID of the project to which the set token belongs.
     * @param _token The new token.
     */
    setFor(
      _projectId: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Each project's attached token contract. _projectId The ID of the project to which the token belongs.
     */
    tokenOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * The total supply of tokens for each project, including claimed and unclaimed tokens.
     * @param _projectId The ID of the project to get the total token supply of.
     */
    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Only a token holder or an operator can transfer its unclaimed tokens.
     * Allows a holder to transfer unclaimed tokens to another account.
     * @param _amount The amount of tokens to transfer.
     * @param _holder The address to transfer tokens from.
     * @param _projectId The ID of the project whose tokens are being transferred.
     * @param _recipient The recipient of the tokens.
     */
    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Each holder's balance of unclaimed tokens for each project. _holder The holder of balance. _projectId The ID of the project to which the token belongs.
     */
    unclaimedBalanceOf(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * The total supply of unclaimed tokens for each project. _projectId The ID of the project to which the token belongs.
     */
    unclaimedTotalSupplyOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

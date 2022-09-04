const fs = require('fs');
const path = require('path');

const CONTRACTS = [
  'JBETHPaymentTerminal',
  'JBSingleTokenPaymentTerminalStore',
  'JBController',
  'JBFundingCycleStore',
  'JBSplitsStore',
  'JBCurrencies',
  'JBOperatorStore',
  'JBTokenStore',
  'JBDirectory',
  'JBPrices',
  'JBETHERC20ProjectPayerDeployer',
  'JBProjects',
  'JBETHERC20SplitsPayerDeployer',
  'JB3DayReconfigurationBufferBallot',
  'JB7DayReconfigurationBufferBallot',
];

const srcCodeFactory = contractName =>
  `/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { useContext } from 'react';
import { get${contractName} } from 'juice-sdk';

import { JuiceContext } from '../../../contexts/JuiceContext';

export function use${contractName}() {
  const { provider, networkName } = useContext(JuiceContext);
  if (!provider) return;

  return get${contractName}(provider, { network: networkName });
}
`;

const createFileForContract = contractName => {
  const filepath = path.resolve(
    __dirname,
    `../src/hooks/juice-contracts/contracts/use${contractName}.ts`,
  );
  fs.writeFileSync(filepath, srcCodeFactory(contractName), { flag: 'w' });
};

const getIndexFileContents = () => {
  const contentLine = hookName =>
    `export { use${hookName} } from './use${hookName}';`;
  return CONTRACTS.map(c => contentLine(c)).join('\n');
};

const createIndexTsFile = () => {
  const filepath = path.resolve(
    __dirname,
    `../src/hooks/juice-contracts/contracts/index.ts`,
  );
  CONTRACTS.map(contractName => createFileForContract(contractName));

  fs.writeFileSync(filepath, getIndexFileContents(), { flag: 'w' });
};

CONTRACTS.map(contractName => createFileForContract(contractName));
createIndexTsFile();

console.log('done.');

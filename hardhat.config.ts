import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import 'hardhat-spdx-license-identifier';

export default {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts: {
        count: 1,
      },
      blockGasLimit: 15000000,
      hardfork: 'berlin',
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      evmVersion: 'berlin',
      optimizer: {
        enabled: true,
        runs: 4294967295,
      },
    },
  },
  paths: {
    sources: './src',
    tests: './test',
    cache: './cache',
    artifacts: './build',
  },
  typechain: {
    outDir: 'build/types',
    target: 'ethers-v5',
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: false,
  },
};

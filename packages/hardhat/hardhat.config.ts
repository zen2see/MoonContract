/* eslint-disable no-unused-vars */
import { utils } from "ethers";
import { create } from "ipfs-http-client";
import { config as configEnv } from "dotenv";
import { task } from "hardhat/config";
import { HardhatUserConfig, SolcUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "solidity-coverage";
import "tsconfig-paths/register";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";

// eslint-disable-next-line node/no-path-concat
configEnv({ path: __dirname + "/.env" });
const { isAddress, getAddress, formatUnits, parseUnits } = utils;
const INFURA_PROJECT_ID = process.env.INFURA_PID;
const KOVAN_PRIVATE_KEY = process.env.KOVAN_KEY;
const MATIC_ID = process.env.POLYGON_MAINET;
const MUMBAI_ID = process.env.POLYGON_MUMBAI;
const PK = process.env.PK;
const PKUL = process.env.PKUL;
const ALCHEMY_PROJECT_ID = process.env.ALCHEMY_PROJECT_ID;
const FORKING_ID = process.env.FORKING_ID;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const defaultNetwork = "localhost";
const DEFAULT_COMPILER_SETTINGS: SolcUserConfig = {
  version: "0.8.12",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: "none",
    },
  },
};
if (process.env.RUN_COVERAGE === "1") {
  /**
   * Updates the default compiler settings when running coverage.
   * See https://github.com/sc-forks/solidity-coverage/issues/417#issuecomment-730526466
   */
  console.info("Using coverage compiler settings");
  DEFAULT_COMPILER_SETTINGS.settings = {
    yul: true,
    yulDetails: {
      stackAllocation: true,
    },
  };
}
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  // defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    sameUser: 1,
  },
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PID}`,
      accounts: [`0x${PKUL}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    arbitrumrinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
    optimismrinkeby: {
      url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${PKUL}`],
    },
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: true,
    runOnCompile: false,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  typechain: {
    outDir: "./types/typechain",
  },
  mocha: {
    timeout: 40000,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    enabled: !!process.env.REPORT_GAS,
    coinmarketcap: `${process.env.COINMARKETCAP_API_KEY}`,
    maxMethodDiff: 10,
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`,
    // npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
  },
};

// bsc: "YOUR_BSCSCAN_API_KEY",
// bscTestnet: "YOUR_BSCSCAN_API_KEY",

// avalanche: "YOUR_SNOWTRACE_API_KEY",
// avalancheFujiTestnet: "YOUR_SNOWTRACE_API_KEY",

// moonbeam: "YOUR_MOONBEAM_MOONSCAN_API_KEY"
// moonriver: "YOUR_MOONRIVER_MOONSCAN_API_KEY",
// moonbaseAlpha: "YOUR_MOONBEAM_MOONSCAN_API_KEY",

// harmony: "YOUR_HARMONY_API_KEY",
// harmonyTest: "YOUR_HARMONY_API_KEY",

// xdai and sokol don't need an API key, but you still need
// to specify one; any string placeholder will work
// xdai: "api-key",
// sokol: "api-key",
// aurora: "api-key",
// auroraTestnet: "api-key",

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default config;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

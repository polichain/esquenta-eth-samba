import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import dotenv from "dotenv";

dotenv.config();
const SEPOLIA_PRIVATE_KEY = process.env["SEPOLIA_PRIVATE_KEY"] ?? "";
const ALCHEMY_API_KEY = process.env["ALCHEMY_API_KEY"] ?? "";
const ETHERSCAN_API_KEY = process.env["ETHERSCAN_API_KEY"] ?? "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;

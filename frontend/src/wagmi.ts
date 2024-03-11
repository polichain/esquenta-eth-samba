import { http, createConfig } from "wagmi";
import { hardhat, sepolia } from "wagmi/chains";

export const config = createConfig({
  // chains: [mainnet, sepolia, hardhat],
  chains: [hardhat, sepolia],
  connectors: [
    // injected(),
    // coinbaseWallet({ appName: "Create Wagmi" }),
    // walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

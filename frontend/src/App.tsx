import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { hardhat, sepolia } from "wagmi/chains";
import Contract from "./Contract";

const CHAIN_ID = import.meta.env.DEV ? hardhat.id : sepolia.id;

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { switchChain } = useSwitchChain();
  const { disconnect } = useDisconnect();

  const isCorrectChain = CHAIN_ID === account.chainId;

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button key={connector.uid} onClick={() => connect({ connector })} type="button">
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      <div>
        <h2>Contract</h2>
        {isCorrectChain ? (
          <Contract />
        ) : (
          <button type="button" onClick={() => switchChain({ chainId: CHAIN_ID })}>
            Switch chain
          </button>
        )}
      </div>
    </>
  );
}

export default App;

import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "./index.css";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (rootElement === null) {
  console.error("Failed to find the root element");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>,
  );
}

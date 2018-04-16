import { providers } from 'ethers';

export default function ConnectWalletToNetwork(wallet, networkName = 'Ropsten') {
  const provider = providers.defaultProvider(networkName);
  const walletWithProvider = { ...wallet, ...{ provider } };
  return walletWithProvider;
}

import { importWalletFromMnemonic, importWalletFromPrivateKey } from './importWallet';
import connectWalletToNetwork from './connectWallet';

function LoginAndConnectUsingMnemonic(passPhrase, networkName) {
  const importedWallet = importWalletFromMnemonic(passPhrase);
  const connectedWallet = connectWalletToNetwork(importedWallet, networkName);
  return connectedWallet;
}

function LoginAndConnectUsingPrivateKey(privateKey, networkName) {
  const importedWallet = importWalletFromPrivateKey(privateKey);
  const connectedWallet = connectWalletToNetwork(importedWallet, networkName);
  return connectedWallet;
}

export {
  LoginAndConnectUsingMnemonic,
  LoginAndConnectUsingPrivateKey,
};

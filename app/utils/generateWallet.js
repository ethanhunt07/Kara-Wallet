import ethers from 'ethers';

import GeneratePassPhrase from './generatePassPhrase';

export function GenerateWallet() {
  const passPhrase = GeneratePassPhrase();
  const wallet = ethers.Wallet.fromMnemonic(passPhrase);
  return {
    wallet,
    passPhrase,
  };
}

export function GenerateWalletUsingPhrase(passphrase) {
  try {
    const wallet = ethers.Wallet.fromMnemonic(passphrase);
    return wallet;
  } catch (e) {
    console.error(e);
  }
}

import ethers from 'ethers';

function importWalletFromMnemonic(passPhrase) {
  const importedWallet = ethers.Wallet.fromMnemonic(passPhrase);
  return importedWallet;
}

function importWalletFromPrivateKey(privateKey) {
  const importedWallet = new ethers.Wallet(privateKey);
  return importedWallet;
}

export {
  importWalletFromMnemonic,
  importWalletFromPrivateKey,
};

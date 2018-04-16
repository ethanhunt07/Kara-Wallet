import ethers from 'ethers';

import GeneratePassPhrase from './generatePassPhrase';

export default function GenerateWallet() {
  const passPhrase = GeneratePassPhrase();
  const wallet = ethers.Wallet.fromMnemonic(passPhrase);
  return {
    wallet,
    passPhrase,
  };
}

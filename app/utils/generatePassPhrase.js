import ethers from 'ethers';

export default function GeneratePassPhrase() {
  // 24 bytes = 192 bits
  const passPhrase = ethers.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
  console.log(`Generated pass phrase is ${passPhrase}`);
  return passPhrase;
}

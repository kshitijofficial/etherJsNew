const ethers = require('ethers');

const connectToBlockchain = async()=>{
  const provider = new ethers.JsonRpcProvider("https://ethereum.publicnode.com")
  const balance = await provider.getBalance('0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea');
  const etherBalance = ethers.formatEther(balance);
  console.log(etherBalance)
}
connectToBlockchain()
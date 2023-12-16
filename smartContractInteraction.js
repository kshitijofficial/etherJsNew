const ethers = require('ethers');
const abi = require('./contract.json')
require('dotenv').config();

const apiKey =process.env.API_KEY
const privateKey = process.env.PRIVATE_KEY

const readSmartContract = async()=>{
  const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${apiKey}`)
  const contractAddress="0x83E8d605e73c0A8Da2F2B3F4046599Fa41514f52"
  const contract = new ethers.Contract(contractAddress,abi,provider);
  const data = await contract.retrieve();
  console.log(Number(data))
}

 readSmartContract()
const writeSmartContract = async()=>{
    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${apiKey}`)
    const contractAddress="0x83E8d605e73c0A8Da2F2B3F4046599Fa41514f52"
    const wallet = new ethers.Wallet(privateKey,provider)
    const contract = new ethers.Contract(contractAddress,abi,wallet);
    const tx = await contract.store(1);
    await tx.wait()
    console.log("successful")
  }
writeSmartContract()
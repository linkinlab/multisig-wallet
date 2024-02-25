// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");

async function main() {
  const MultiSigWallet = await ethers.getContractFactory('MultiSigWallet');
  const owners = ["0x61ee5D1Cd7697a561DcC7c894a49D6a2be4030D8","0xfC51545E56B5523d29E33A46e68beF512913091C","0xbD9BfA5599657F1BCbCfc359bdA859fdF9e98EaD"]; 
  const numConfirmationsRequired = 3; 
  const multiSigWallet = await MultiSigWallet.deploy(owners, numConfirmationsRequired);

  console.log(multiSigWallet)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

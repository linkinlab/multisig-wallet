require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai-pokt.nodies.app',
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey:'17SCF2AAC4H7ZSBXZJMVAIYH29D81KZGTY'
  },
  sourcify:{
    enabled: true
  }
};


require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/H1Xpy0bFtXuYvVRkaIICx_LZ7_DsNqiu',
      accounts: ['8fb64fce260f1a1345d6ec175e4b79fae448e1ad684d58927c4ff834551907e9']
    }
  }
};

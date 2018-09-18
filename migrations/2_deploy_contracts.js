var MemoContract = artifacts.require("./MemoContract.sol");

module.exports = function(deployer) {
  deployer.deploy(MemoContract);
};

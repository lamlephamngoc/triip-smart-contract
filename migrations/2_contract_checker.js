// const TIIMToken = artifacts.require("TIIMToken");
const ContractChecker = artifacts.require("ContractChecker");

module.exports = async (deployer, network, accounts) => {
  deployer.deploy(ContractChecker);
};

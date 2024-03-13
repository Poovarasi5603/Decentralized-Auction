const Auction = artifacts.require("Auction");

module.exports = function (deployer) {
  deployer.deploy(Auction,"0x11f9f721d50becfb579db25c8c86fadecd235a29");
};

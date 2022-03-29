import { ethers, upgrades } from "hardhat";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy("0x594CACd3313BB9e3CfF4Cb78D39789f621b71c39", BoxV2);

  console.log("Your upgraded proxy is done!", box.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

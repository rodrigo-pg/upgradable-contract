import { ethers, upgrades } from "hardhat";

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [53], {initializer: "store"});

  console.log("deployed to:", box.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

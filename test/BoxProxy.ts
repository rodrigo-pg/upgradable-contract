import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

let Box;
let box:any;
 
describe('Box (proxy)', function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box");
    box = await upgrades.deployProxy(Box, [53], {initializer: 'store'});
  });

  it('retrieve returns a value previously initialized', async function () {
    expect((await box.retrieve()).toString()).to.equal('53');
  });
});
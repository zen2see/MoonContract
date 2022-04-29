import { expect } from "chai";
import { ethers } from "hardhat";

describe("MoonContract", function () {
  it("Should return the new mood value once it's changed", async function () {
    const MoonContract = await ethers.getContractFactory("MoonContract");
    const mooncontract = await MoonContract.deploy();
    await mooncontract.deployed();

    const setHodlingTx = await mooncontract.setMood("HODL");

    // wait until the transaction is mined
    await setHodlingTx.wait();

    expect(await mooncontract.getMood()).to.equal("HODL");
  });
});

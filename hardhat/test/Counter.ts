import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("Counter", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployConterStartsWithOne() {
    const initValue: bigint = BigInt("1");

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const counter = await hre.viem.deployContract("Counter", [initValue], {});

    const publicClient = await hre.viem.getPublicClient();

    return {
      counter,
      owner,
      otherAccount,
      publicClient,
      initValue,
    };
  }

  describe("Deployment", function () {
    it("Should set the right initial value", async function () {
      const { counter, otherAccount, owner, publicClient, initValue } =
        await loadFixture(deployConterStartsWithOne);

      expect(await counter.read.i()).to.equal(initValue);
    });
  });

  describe("Increments and decrements", function () {
    it("Should increment correctely", async function () {
      const { counter, initValue, otherAccount, owner, publicClient } =
        await loadFixture(deployConterStartsWithOne);

      const hash = await counter.write.inc();
      await publicClient.waitForTransactionReceipt({ hash });
      expect(await counter.read.i()).to.equal(initValue + BigInt(1));
    });
    it("Should decrement correctely", async function () {
      const { counter, initValue, otherAccount, owner, publicClient } =
        await loadFixture(deployConterStartsWithOne);

      const hash = await counter.write.dec();
      await publicClient.waitForTransactionReceipt({ hash });
      expect(await counter.read.i()).to.equal(initValue - BigInt(1));
    });
  });
});

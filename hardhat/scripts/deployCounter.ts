import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function main() {
  const initValue = BigInt(1);
  const counter = await hre.viem.deployContract("Counter", [initValue], {});

  console.log(
    `Counter with with value ${initValue} deployed to ${counter.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

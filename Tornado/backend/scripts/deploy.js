const hre = require("hardhat");

async function main() {
  // deploy hasher
  const Hasher = await hre.ethers.getContractFactory("Hasher");
  const hasher = await Hasher.deploy();
  await hasher.deployed();
  console.log(hasher.address);

  // deploy tornado
  const Tornado = await hre.ethers.getContractFactory("Tornado");
  const tornado = await Tornado.deploy(hasher.address);
  await tornado.deployed();
  console.log(tornado.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

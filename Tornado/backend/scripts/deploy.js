const hre = require("hardhat");

async function main() {
  // deploy hasher
  const Hasher = await hre.ethers.getContractFactory("Hasher");
  const hasher = await Hasher.deploy();
  await hasher.deployed();
  console.log(hasher.address);

  // deploy verifier
  const Verifier = await hre.ethers.getContractFactory("Groth16Verifier");
  const verifier = await Verifier.deploy();
  await verifier.deployed();
  console.log(verifier.address);
  const verifierAddress = verifier.address;

  // deploy tornado
  const Tornado = await hre.ethers.getContractFactory("Tornado");
  const tornado = await Tornado.deploy(hasher.address, verifierAddress);
  await tornado.deployed();
  console.log(tornado.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

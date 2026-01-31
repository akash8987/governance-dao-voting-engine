const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const Token = await hre.ethers.getContractFactory("GovernanceToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log("Token deployed to:", await token.getAddress());

  const Governor = await hre.ethers.getContractFactory("GovernorContract");
  const governor = await Governor.deploy(await token.getAddress());
  await governor.waitForDeployment();
  console.log("Governor deployed to:", await governor.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

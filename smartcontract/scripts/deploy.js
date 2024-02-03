const hre = require("hardhat");



// scripts/deploy.js
async function main() {

  const age = 35;
  const name= "CaveDev";

  // Deploying SimpleRegistry contract
  const lock= await hre.ethers.deployContract("SimpleRegistry",[name,age]);
  await lock.waitForDeployment();

  console.log(`successfully ${lock.target}`);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

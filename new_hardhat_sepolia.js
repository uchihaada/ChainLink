const { ethers } = require("ethers");

const provider = ethers.getDefaultProvider(
  "https://ethereum-sepolia-rpc.publicnode.com"
);

const abi = require("./abi.json");

async function main() {
  const contractAddressBTC = "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c";

  const contractBTC = new ethers.Contract(contractAddressBTC, abi, provider);

  const btcPrice = await contractBTC.latestAnswer();

  console.log("BTC price is:", String(btcPrice));
}

main()
  .then(() => {
    console.log("gg");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

async function main () {
        
        
        task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
                const accounts = await hre.ethers.getSigners();
              
                for (const account of accounts) {
                  console.log(account.address);
                }
              });
}




      main()
      .then(() => process.exit(0))
      .catch((error) => {
          console.error(error);
          process.exit(1);
      });
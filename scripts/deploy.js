const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
	const gameContract = await gameContractFactory.deploy(
		['Assassin', 'Swordsman', 'Sniper'], // Names
		[
			'https://i.imgur.com/H1Lno7t.png', // Images
			'https://i.imgur.com/Tjcw9j6.png',
			'https://i.imgur.com/louNZ3v.png',
		],
		[50, 150, 100], // HP values
		[150, 50, 100] // Attack damage values
	);
	await gameContract.deployed();
	console.log('Contract deployed to:', gameContract.address);

	let txn;
	txn = await gameContract.mintCharacterNFT(0);
	await txn.wait();
	console.log('Minted NFT #1');

	txn = await gameContract.mintCharacterNFT(1);
	await txn.wait();
	console.log('Minted NFT #2');

	txn = await gameContract.mintCharacterNFT(2);
	await txn.wait();
	console.log('Minted NFT #3');

	txn = await gameContract.mintCharacterNFT(1);
	await txn.wait();
	console.log('Minted NFT #4');

	console.log('Done deploying and minting!');
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();

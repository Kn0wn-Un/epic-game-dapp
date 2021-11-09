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
		[150, 50, 100], // Attack damage values
		'Schmuserkadser',
		'https://i.imgur.com/lhQY7Iu.png',
		1000,
		20
	);
	await gameContract.deployed();
	console.log('Contract deployed to:', gameContract.address);
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

export function getContractAddressNulled(dataWallet, count = 3) {
	const coinsContractAddress = dataWallet.positions
		?.slice(0, count)
		.map((item) => item.relationships.fungible.data.id);
	return coinsContractAddress;
}

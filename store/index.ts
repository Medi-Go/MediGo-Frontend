import { Reducer, configureStore, AnyAction } from '@reduxjs/toolkit';
import { isDev } from '../constants/nodeEnv';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer, { IState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer as Reducer<IState, AnyAction>,
  devTools: isDev,
});

const createStore = () => {
  return store;
};
const wrapper = createWrapper(createStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default wrapper;

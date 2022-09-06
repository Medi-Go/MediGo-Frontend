import medicine, { MainMedicineState } from './slices/medicine';
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { UserState } from './slices/user';
import { AlertState } from './slices/flashAlert';
import user from './slices/user';
import flashAlert from './slices/flashAlert';

export interface IState {
  user: UserState;
  flashAlert: AlertState;
  medicine: MainMedicineState;
}

const rootReducer = (
  state: IState,
  action: AnyAction,
): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: user,
        flashAlert: flashAlert,
        medicine: medicine,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

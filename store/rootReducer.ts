import medicines, { MyMedicineState } from './slices/medicine';
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import user, { UserState } from './slices/user';
import flashAlert, { AlertState } from './slices/flashAlert';
import prescription, { PrescriptionState } from './slices/prescription';

export interface IState {
  user: UserState;
  flashAlert: AlertState;
  medicines: MyMedicineState;
  prescription: PrescriptionState;
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
        medicines: medicines,
        prescription: prescription,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

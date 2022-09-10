import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PrescriptionState {
  month: number;
}

const initialState: PrescriptionState = {
  month: 1,
};

export const prescriptionSlice = createSlice({
  name: 'prescription',
  initialState,
  reducers: {
    setPrescription: (
      state: PrescriptionState,
      action: PayloadAction<PrescriptionState>,
    ) => {
      const { month } = action.payload;

      state.month = month;
    },
  },
});

export const selectPrescription = (state: RootState) => state.prescription;

export const { setPrescription } = prescriptionSlice.actions;
export default prescriptionSlice.reducer;

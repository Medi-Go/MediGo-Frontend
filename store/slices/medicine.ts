import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainMedicineType } from '../../interfaces/medicine';

export interface MainMedicineState {
  value: MainMedicineType;
}

const initialState: MainMedicineState = {
  value: {
    effect: '',
    medicines: [],
  },
};

export const medicineSlice = createSlice({
  name: 'medicine',
  initialState,
  reducers: {
    setMedicine: (
      state: MainMedicineState,
      action: PayloadAction<MainMedicineType>,
    ) => {
      state.value = action.payload;
    },
  },
});

export const selectMedicine = (state: RootState) => state.medicine;

export const { setMedicine } = medicineSlice.actions;
export default medicineSlice.reducer;

import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainMedicineType, MedicineType } from '../../interfaces/medicine';

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
    editMedicine: (
      state: MainMedicineState,
      action: PayloadAction<MedicineType>,
    ) => {
      if (!action.payload || !state.value.medicines) return;

      const editMedicineIndex = state.value.medicines.findIndex(
        ({ id }) => id === action.payload.id,
      );

      state.value.medicines[editMedicineIndex] = action.payload;
    },
  },
});

export const selectMedicine = (state: RootState) => state.medicine;

export const { setMedicine, editMedicine } = medicineSlice.actions;
export default medicineSlice.reducer;

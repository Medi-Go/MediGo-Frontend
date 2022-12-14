import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MedicineEffectType,
  DuplicatedMedicineType,
} from '../../interfaces/medicines';

export interface MedicineState {
  medicineEffects: MedicineEffectType[];
  duplicatedMedicines: DuplicatedMedicineType[];
}

const initialState: MedicineState = {
  medicineEffects: [],
  duplicatedMedicines: [],
};

export const medicineSlice = createSlice({
  name: 'medicines',
  initialState,
  reducers: {
    setMedicines: (
      state: MedicineState,
      action: PayloadAction<MedicineState>,
    ) => {
      state.medicineEffects = action.payload.medicineEffects;
      state.duplicatedMedicines = action.payload.duplicatedMedicines;
    },
  },
});

export const selectMedicines = (state: RootState) => state.medicines;

export const { setMedicines } = medicineSlice.actions;
export default medicineSlice.reducer;

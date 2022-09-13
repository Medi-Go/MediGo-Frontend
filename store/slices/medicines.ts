import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MedicineEffectsType,
  DuplicatedMedicinesType,
} from '../../interfaces/medicines';

export interface MedicineState {
  medicineEffects: MedicineEffectsType[];
  duplicatedMedicines: DuplicatedMedicinesType[];
}

const initialState: MedicineState = {
  medicineEffects: [],
  duplicatedMedicines: [],
};

export const medicineSlice = createSlice({
  name: 'medicines',
  initialState,
  reducers: {
    setMyMedicines: (
      state: MedicineState,
      action: PayloadAction<MedicineState>,
    ) => {
      state.medicineEffects = action.payload.medicineEffects;
      state.duplicatedMedicines = action.payload.duplicatedMedicines;
    },
  },
});

export const selectMedicines = (state: RootState) => state.medicines;

export const { setMyMedicines } = medicineSlice.actions;
export default medicineSlice.reducer;

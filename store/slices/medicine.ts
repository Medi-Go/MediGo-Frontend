import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MedicineEffectsType,
  MedicineType,
  DuplicatedMedicinesType,
  DuplicatedMedicineType,
} from '../../interfaces/medicine';

export interface MyMedicineState {
  medicineEffects: MedicineEffectsType[];
  duplicatedMedicines: DuplicatedMedicinesType[];
}

const initialState: MyMedicineState = {
  medicineEffects: [],
  duplicatedMedicines: [],
};

export const medicineSlice = createSlice({
  name: 'medicines',
  initialState,
  reducers: {
    setMyMedicines: (
      state: MyMedicineState,
      action: PayloadAction<MyMedicineState>,
    ) => {
      state.medicineEffects = action.payload.medicineEffects;
      state.duplicatedMedicines = action.payload.duplicatedMedicines;
    },
  },
});

export const selectMedicines = (state: RootState) => state.medicines;

export const { setMyMedicines } = medicineSlice.actions;
export default medicineSlice.reducer;

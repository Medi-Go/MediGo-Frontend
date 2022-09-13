export interface MedicineEffectsType {
  effect: string;
  medicines: MedicineType[];
}

export interface MedicineType {
  medicineId: number;
  medicineName: string;
  remainCount: number;
  treatDate: number;
}
export interface DuplicatedMedicinesType {
  medicineId: number;
  medicineName: string;
  duplicatedMedicineCases: DuplicatedMedicineType[];
}

export interface DuplicatedMedicineType {
  administerInterval: number;
  dailyCount: number;
  totalDayCount: number;
  treatDate: number;
  treatMedicalName: string;
}

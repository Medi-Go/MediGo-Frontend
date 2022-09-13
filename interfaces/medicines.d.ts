export interface MedicineEffectType {
  effect: string;
  medicines: MedicineType[];
}

export interface MedicineType {
  medicineId: number;
  medicineName: string;
  remainCount: number;
  treatDate: number;
}
export interface DuplicatedMedicineType {
  medicineId: number;
  medicineName: string;
  duplicatedMedicineCases: DuplicatedMedicineType[];
}

export interface DuplicatedMedicineCaseType {
  administerInterval: number;
  dailyCount: number;
  totalDayCount: number;
  treatDate: number;
  treatMedicalName: string;
}

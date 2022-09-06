export interface MainMedicineType {
  effect: string;
  medicines: MedicineType[];
}

export interface MedicineType {
  id: number;
  medicineName: string;
  remainCount: number;
  treatDate: number;
}

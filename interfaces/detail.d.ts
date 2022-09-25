export interface DetailsType {
  medicineId: number;
  medicineName: string;
  medicineEffect: string;
  medicineInfoCases: MedicineInfoCaseType[];
}

export interface MedicineInfoCaseType {
  administerPath?: string;
  makingCompany?: string;
  productName?: string;
  medicineGroup?: string;
  salesCompany?: string;
  payInfo?: string;
  administerPath?: string;
  shape?: string;
  singleYN?: string;
  specialYN?: string;
  ingredientInfos?: IngredientInfosType[];
  kpicInfos?: KpicInfosType[];
  durInfos?: DurgInfosType[];
}

interface IngredientInfosType {
  ingredientName: string;
}

interface KpicInfosType {
  kpic: string;
}

interface DrugInfosType {
  ageTaboo: string;
  pregnantTaboo: string;
  combinedTaboo: string;
}

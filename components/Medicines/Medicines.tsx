import { useEffect } from 'react';
import {
  DuplicatedMedicineType,
  MedicineEffectType,
} from '../../interfaces/medicines';
import Medicine from '../Medicine/Medicine';
import { MedicinesContainer, TitleText } from './style';

interface MedicinesProps {
  title: string;
  medicineData: MedicineEffectType[] | DuplicatedMedicineType[];
}

const Medicines = ({ title, medicineData }: MedicinesProps) => {
  useEffect(() => {
    console.log('medicines', medicineData);
  }, [medicineData]);
  return (
    <MedicinesContainer>
      <TitleText>{title}</TitleText>
      {title === '복용중인 약'
        ? medicineData.map((medicine, idx) => (
            <Medicine
              key={idx}
              type="medicineEffects"
              effect={medicine.effect}
              medicines={medicine.medicines}
            />
          ))
        : medicineData.map((medicine) => (
            <Medicine
              key={medicine.medicineId}
              type="duplicatedMedicines"
              medicineName={medicine.medicineName}
              duplicatedMedicineCases={medicine.duplicatedMedicineCases}
            />
          ))}
    </MedicinesContainer>
  );
};

export default Medicines;

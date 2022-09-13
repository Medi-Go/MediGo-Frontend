import { useEffect } from 'react';
import styled from 'styled-components';
import {
  DuplicatedMedicineType,
  MedicineEffectType,
} from '../../interfaces/medicines';
import Medicine from '../Medicine/Medicine';

interface MedicinesProps {
  title: string;
  medicineData: MedicineEffectType[] | DuplicatedMedicineType[];
}

const MedicinesContainer = styled.div`
  margin: 30px;
  margin-top: 10px;
  height: 280px;
  overflow: hidden;
`;

const TitleText = styled.div`
  color: #595959;
  font-size: 18px;
  font-weight: bold;
`;

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
              medicines={medicine.medicines.length}
            />
          ))
        : medicineData.map((medicine) => (
            <Medicine
              key={medicine.medicineId}
              type="duplicatedMedicines"
              medicineName={medicine.medicineName}
              duplicatedMedicineCases={medicine.duplicatedMedicineCases.length}
            />
          ))}
    </MedicinesContainer>
  );
};

export default Medicines;

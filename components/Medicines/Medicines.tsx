import {
  DuplicatedMedicineType,
  MedicineEffectType,
} from '../../interfaces/medicines';
import Medicine from '../Medicine/Medicine';
import { MedicinesContainer, TitleText, MedicinesComponents } from './style';

interface MedicinesProps {
  title: string;
  medicineData: MedicineEffectType[] | DuplicatedMedicineType[];
}

const Medicines = ({ title, medicineData }: MedicinesProps) => {
  return (
    <MedicinesContainer>
      <TitleText>{title}</TitleText>
      <MedicinesComponents>
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
      </MedicinesComponents>
    </MedicinesContainer>
  );
};

export default Medicines;

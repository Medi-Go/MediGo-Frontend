import { useState } from 'react';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
import {
  MedicineContainer,
  MedicineNameContainer,
  NameText,
  CountText,
} from './style';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';

interface MedicineProps {
  type: string;
  effect?: string;
  medicines?: MedicineType[];
  medicineName?: string;
  duplicatedMedicineCases?: DuplicatedMedicineCaseType[];
}

const Medicine = ({
  type,
  effect,
  medicines,
  medicineName,
  duplicatedMedicineCases,
}: MedicineProps) => {
  const [effectClicked, setEffectClicked] = useState(false);
  const [duplicatedMedicineClicked, setDuplicatedMedicineClicked] =
    useState(false);

  const showEffectDetails = () => {
    setEffectClicked(!effectClicked);
  };

  const showDuplicatedMedicineCases = () => {
    setDuplicatedMedicineClicked(!duplicatedMedicineClicked);
  };

  return (
    <>
      {type === 'medicineEffects' ? (
        <MedicineContainer onClick={showEffectDetails}>
          <MedicineNameContainer>
            <NameText>{effect}</NameText>
          </MedicineNameContainer>
          <CountText>{medicines.length}종</CountText>
        </MedicineContainer>
      ) : (
        <MedicineContainer onClick={showDuplicatedMedicineCases}>
          <MedicineNameContainer>
            <NameText>{medicineName}</NameText>
          </MedicineNameContainer>
          <CountText>{duplicatedMedicineCases.length}개</CountText>
        </MedicineContainer>
      )}
      {effectClicked && <MedicineDetails medicines={medicines} />}
      {duplicatedMedicineClicked && (
        <MedicineDetails duplicatedMedicineCases={duplicatedMedicineCases} />
      )}
    </>
  );
};

export default Medicine;

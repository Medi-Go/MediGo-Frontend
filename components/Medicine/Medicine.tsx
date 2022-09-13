import Image from 'next/Image';
import { useState, useEffect } from 'react';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
import {
  MedicineContainer,
  MedicineNameContainer,
  MedicineIconImage,
  NameText,
  CountText,
} from './style';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';

interface MedicineProps {
  type: string;
  effect: string;
  medicines: MedicineType[];
  medicineName: string;
  duplicatedMedicineCases: DuplicatedMedicineCaseType[];
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

  useEffect(() => {
    console.log('medicine', medicines);
    console.log('medicine', duplicatedMedicineCases);
  }, []);

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
            <MedicineIconImage>
              <Image
                src={'/icon-192x192.png'}
                width={40}
                height={40}
                alt={'medicineIcon'}
              />
            </MedicineIconImage>
            <NameText>{effect}</NameText>
          </MedicineNameContainer>
          <CountText>{medicines.length}종</CountText>
        </MedicineContainer>
      ) : (
        <MedicineContainer onClick={showDuplicatedMedicineCases}>
          <MedicineNameContainer>
            <MedicineIconImage>
              <Image
                src={'/icon-192x192.png'}
                width={40}
                height={40}
                alt={'medicineIcon'}
              />
            </MedicineIconImage>
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

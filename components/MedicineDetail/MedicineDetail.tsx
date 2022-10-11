import { useRouter } from 'next/router';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';
import {
  MedicineDetailContainer,
  MedicineName,
  MedicineNameText,
  MedicineRemainCount,
  DuplicatedCaseDate,
  DuplicatedCaseMedicalName,
} from './style';

interface MedicineDetailProps {
  medicine?: MedicineType;
  duplicatedCase?: DuplicatedMedicineCaseType;
}

const MedicineDetail = ({ medicine, duplicatedCase }: MedicineDetailProps) => {
  const router = useRouter();

  const goToDetail = () => {
    router.push({
      pathname: `/medicine/${medicine.medicineId}`,
    });
  };
  return (
    <>
      {!!medicine && (
        <MedicineDetailContainer onClick={goToDetail}>
          <MedicineName>
            <MedicineNameText>{medicine.medicineName}</MedicineNameText>
          </MedicineName>
          <MedicineRemainCount>{medicine.remainCount}</MedicineRemainCount>
        </MedicineDetailContainer>
      )}
      {!!duplicatedCase && (
        <MedicineDetailContainer>
          <DuplicatedCaseDate>{duplicatedCase.treatDate}</DuplicatedCaseDate>
          <DuplicatedCaseMedicalName>
            {duplicatedCase.treatMedicalName}
          </DuplicatedCaseMedicalName>
        </MedicineDetailContainer>
      )}
    </>
  );
};

export default MedicineDetail;

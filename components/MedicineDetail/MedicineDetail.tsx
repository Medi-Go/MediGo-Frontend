import { useRouter } from 'next/router';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';
import {
  MedicineDetailContainer,
  DetailName,
  DetailNameText,
  DetailNumberText,
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
      {medicine && (
        <MedicineDetailContainer onClick={goToDetail}>
          <DetailName>
            <DetailNameText>{medicine.medicineName}</DetailNameText>
          </DetailName>
          <DetailNumberText>{medicine.remainCount}</DetailNumberText>
        </MedicineDetailContainer>
      )}
      {duplicatedCase && (
        <MedicineDetailContainer>
          <DetailName>
            <DetailNameText>{duplicatedCase.treatMedicalName}</DetailNameText>
          </DetailName>
          <DetailNumberText>{duplicatedCase.treatDate}</DetailNumberText>
        </MedicineDetailContainer>
      )}
    </>
  );
};

export default MedicineDetail;

import { MedicineDetailContainer } from './style';
import { useRouter } from 'next/router';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';

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
          <div>{medicine.treatDate}</div>
          <div>{medicine.medicineName}</div>
          <div>{medicine.remainCount}</div>
        </MedicineDetailContainer>
      )}
      {!!duplicatedCase && (
        <MedicineDetailContainer>
          <div>{duplicatedCase.treatDate}</div>
          <div>{duplicatedCase.treatMedicalName}</div>
          <div>{duplicatedCase.totalDayCount}</div>
          <div>{duplicatedCase.administerInterval}</div>
          <div>{duplicatedCase.dailyCount}</div>
        </MedicineDetailContainer>
      )}
    </>
  );
};

export default MedicineDetail;

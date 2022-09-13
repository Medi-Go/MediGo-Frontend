import { MedicineDetailContainer } from './style';
import { useRouter } from 'next/router';

const MedicineDetail = ({ medicine, duplicatedCase }) => {
  const router = useRouter();

  const goToDetail = () => {
    router.push(
      {
        pathname: '/detail',
        query: {
          medicineId: medicine.medicineId,
        },
      },
      '/detail',
    );
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

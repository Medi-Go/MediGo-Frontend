import { MedicineDetailContainer } from './style';

const MedicineDetail = ({ medicine, duplicatedCase }) => {
  return (
    <>
      {!!medicine && (
        <MedicineDetailContainer>
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

import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';
import {
  MedicineDetailContainer,
  MedicineIconImage,
  MedicineName,
  MedicineRemainCount,
  PrescriptionIconImage,
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
          <MedicineIconImage>
            <Image
              src={'/icon-192x192.png'}
              width={40}
              height={40}
              alt={'medicineIcon'}
            />
          </MedicineIconImage>
          <MedicineName>{medicine.medicineName.slice(1, 6)}</MedicineName>
          <MedicineRemainCount>{medicine.remainCount}</MedicineRemainCount>
        </MedicineDetailContainer>
      )}
      {!!duplicatedCase && (
        <MedicineDetailContainer>
          <PrescriptionIconImage>
            <Image
              src={'/images/prescription.svg'}
              width={40}
              height={40}
              alt={'medicineIcon'}
            />
          </PrescriptionIconImage>
          <DuplicatedCaseDate>{duplicatedCase.treatDate}</DuplicatedCaseDate>
          <DuplicatedCaseMedicalName>
            {duplicatedCase.treatMedicalName}
          </DuplicatedCaseMedicalName>
          {/* <div>{duplicatedCase.totalDayCount}</div>
          <div>{duplicatedCase.administerInterval}</div>
          <div>{duplicatedCase.dailyCount}</div> */}
        </MedicineDetailContainer>
      )}
    </>
  );
};

export default MedicineDetail;

import React from 'react';
import MedicineDetail from '../MedicineDetail/MedicineDetail';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';
import { MedicineDetailsContainer } from './style';

interface MedicineDetailsProps {
  medicines?: MedicineType[];
  duplicatedMedicineCases?: DuplicatedMedicineCaseType[];
}

const MedicineDetails = ({
  medicines,
  duplicatedMedicineCases,
}: MedicineDetailsProps) => {
  return (
    <>
      {!!medicines && (
        <MedicineDetailsContainer>
          {medicines.map((medicine) => (
            <MedicineDetail key={medicine.medicineId} medicine={medicine} />
          ))}
        </MedicineDetailsContainer>
      )}
      {!!duplicatedMedicineCases && (
        <MedicineDetailsContainer>
          {duplicatedMedicineCases.map((duplicatedCase, idx) => (
            <MedicineDetail key={idx} duplicatedCase={duplicatedCase} />
          ))}
        </MedicineDetailsContainer>
      )}
    </>
  );
};

export default MedicineDetails;

// {medicines.map((medicine) => (
//     <MedicineDetail key={medicine.medicineId} medicine={medicine} />
//   ))}

// {duplicatedMedicineCases.map((case,idx) => (
//     <MedicineDetail
//      key={idx}
//        case={case}
//   />

import React from 'react';
import MedicineDetail from '../MedicineDetail/MedicineDetail';
import {
  MedicineType,
  DuplicatedMedicineCaseType,
} from '../../interfaces/medicines';

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
        <div>
          {medicines.map((medicine) => (
            <MedicineDetail key={medicine.medicineId} medicine={medicine} />
          ))}
        </div>
      )}
      {!!duplicatedMedicineCases && (
        <div>
          {duplicatedMedicineCases.map((duplicatedCase, idx) => (
            <MedicineDetail key={idx} duplicatedCase={duplicatedCase} />
          ))}
        </div>
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

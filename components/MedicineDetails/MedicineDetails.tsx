import React, { useEffect } from 'react';
import MedicineDetail from '../MedicineDetail/MedicineDetail';

const MedicineDetails = ({ medicines, duplicatedMedicineCases }) => {
  useEffect(() => {
    console.log('medicineDetails', medicines);
    console.log('medicineDetails', duplicatedMedicineCases);
  });
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

import {
  MedicineInfoContainer,
  PrescriptionInfoContainer,
  PrescriptionInfoText,
  PrescriptionMedicineInfoContainer,
  PrescriptionMedicineInfoText,
  TreatsContainer,
  TreatsTreatType,
  TreatsTreatMedicalName,
} from './style';

const CalendarInfo = ({ calendarDataType, calendarData }) => {
  return (
    <MedicineInfoContainer>
      {calendarDataType === '투약내역'
        ? calendarData.prescriptions.map((prescription) => (
            <PrescriptionInfoContainer key={prescription.prescriptionId}>
              <PrescriptionInfoText>
                {prescription.treatMedicalName}
              </PrescriptionInfoText>
              {prescription.medicineDetails.map((detail, idx) => (
                <PrescriptionMedicineInfoContainer key={idx}>
                  <PrescriptionMedicineInfoText>
                    {detail.medicineName}
                  </PrescriptionMedicineInfoText>
                  <PrescriptionMedicineInfoText>
                    {detail.medicineEffect}
                  </PrescriptionMedicineInfoText>
                  <PrescriptionMedicineInfoText>
                    {detail.administerCount}
                  </PrescriptionMedicineInfoText>
                </PrescriptionMedicineInfoContainer>
              ))}
            </PrescriptionInfoContainer>
          ))
        : calendarData.treatments.map((treatment, idx) => (
            <TreatsContainer key={idx}>
              <TreatsTreatType>{treatment.treatType}</TreatsTreatType>
              <TreatsTreatMedicalName>
                {treatment.treatMedicalName}
              </TreatsTreatMedicalName>
            </TreatsContainer>
          ))}
    </MedicineInfoContainer>
  );
};

export default CalendarInfo;

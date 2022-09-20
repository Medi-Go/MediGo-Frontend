const CalendarInfo = ({ calendarDataType, calendarData }) => {
  return (
    <>
      {calendarDataType === '투약내역'
        ? calendarData.prescriptions.map((prescription) => (
            <div key={prescription.prescriptionId}>
              <div>{prescription.treatMedicalName}</div>
              {prescription.medicineDetails.map((detail) => (
                <>
                  <div>{detail.medicineName}</div>
                  <div>{detail.medicineEffect}</div>
                  <div>{detail.administerCount}</div>
                </>
              ))}
            </div>
          ))
        : calendarData.treatments.map((treatment, idx) => (
            <div key={idx}>
              <div>{treatment.treatType}</div>
              <div>{treatment.treatMedicalName}</div>
            </div>
          ))}
    </>
  );
};

export default CalendarInfo;

import React from 'react';
import styled from 'styled-components';

const CalendarInfoContainer = styled.div`
  margin-left: 1rem;
`;

const CalendarInfo = ({ medicineList }) => {
  return (
    <div>
      {medicineList.map((medicine) => (
        <CalendarInfoContainer key={medicine.id}>
          {medicine.name}
        </CalendarInfoContainer>
      ))}
      {/* {MedicineListData.filter(
        (medicine) =>
          medicine.date.toDateString() === selectedDate.toDateString(),
      ).map((medicine) => {
        return <div key={medicine.disease}>{medicine.disease}</div>;
      })} */}
    </div>
  );
};

export default CalendarInfo;

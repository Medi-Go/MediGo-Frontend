import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import {
  getCalendarTreatments,
  getCalendarPrescriptions,
} from '../../../apis/calendar';
import CalendarHeader from '../CalendarHeader/CalendarHeader';
import CalendarInfo from '../CalendarInfo/CalendarInfo';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const CalendarDayInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: green;
  padding: 20px;
  width: 10rem;
  height: 5rem;
  font-size: 15px;
`;

const CalendarDayInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type MedicineProps = {
  id: string;
  name: string;
  group: string;
  effect: string;
  combinedTaboo: string;
  ageTaboo: string;
  ingredients: string[];
  company: string;
  cost: number;
  left: number;
};

type MedicineListProps = {
  title: string;
  date: Date;
  data: MedicineProps[];
};

const CalendarComponent = ({ MedicineListData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const selectDate = async (date: Date) => {
    setSelectedDate(date);
    console.log(dateFormat(date));
    console.log(await getCalendarTreatments(dateFormat(date)));
    console.log(await getCalendarPrescriptions(dateFormat(date)));
  };

  const dateFormat = (date: Date) => {
    const year = String(date.getFullYear());
    const month =
      date.getMonth() + 1 < 10
        ? '0' + String(date.getMonth() + 1)
        : String(date.getMonth() + 1);
    return Number(year + month);
  };

  return (
    <CalendarContainer>
      <DatePicker
        selected={selectedDate}
        onChange={selectDate}
        inline
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <CalendarHeader
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
      />
      <CalendarDayInfoContainer>
        {MedicineListData.filter(
          (medicine) =>
            medicine.date.toDateString() === selectedDate.toDateString(),
        ).map((medicine) => (
          <CalendarDayInfo key={medicine}>
            <div>{medicine.disease}</div>
            <CalendarInfo medicineList={medicine.medicineList} />
          </CalendarDayInfo>
        ))}
      </CalendarDayInfoContainer>
    </CalendarContainer>
  );
};

export default CalendarComponent;

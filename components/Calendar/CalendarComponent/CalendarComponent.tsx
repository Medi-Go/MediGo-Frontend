import React, { useState } from 'react';
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
  background-color: lightgray;
  padding: 20px;
  width: 10rem;
  height: 5rem;
  font-size: 15px;
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

const CalendarComponent = ({ calendarDataType }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarTreatments, setCalendarTreatments] = useState([]);
  const [calendarPrescriptions, setCalendarPrescriptions] = useState([]);

  const selectDate = async (date: Date) => {
    setSelectedDate(date);
    const formedDate = Number(String(createDateFormat(date)).slice(0, 6));

    const calendarTreatmentsData = await getCalendarTreatments(formedDate);
    const calendarPrescriptionsData = await getCalendarPrescriptions(
      formedDate,
    );
    setCalendarTreatments(calendarTreatmentsData.calendarTreatments);
    setCalendarPrescriptions(calendarPrescriptionsData.calendarPrescriptions);
  };

  const createDateFormat = (date: Date) => {
    const year = String(date.getFullYear());
    const month =
      date.getMonth() + 1 < 10
        ? '0' + String(date.getMonth() + 1)
        : String(date.getMonth() + 1);
    const day =
      date.getMonth() + 1 < 10
        ? '0' + String(date.getDate())
        : String(date.getDate());
    return Number(year + month + day);
  };

  const getFilteredData = (calendarData) => {
    return calendarData.filter(
      (data) => data.date === createDateFormat(selectedDate),
    )[0];
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
        {calendarDataType === '투약내역'
          ? getFilteredData(calendarPrescriptions) && (
              <CalendarInfo
                calendarDataType={calendarDataType}
                calendarData={getFilteredData(calendarPrescriptions)}
              />
            )
          : getFilteredData(calendarTreatments) && (
              <CalendarInfo
                calendarDataType={calendarDataType}
                calendarData={getFilteredData(calendarTreatments)}
              />
            )}
      </CalendarDayInfoContainer>
    </CalendarContainer>
  );
};

export default CalendarComponent;

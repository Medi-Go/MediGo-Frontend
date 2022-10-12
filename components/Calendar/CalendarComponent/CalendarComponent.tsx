import React, { useState } from 'react';
import styled from 'styled-components';
import {
  getCalendarTreatments,
  getCalendarPrescriptions,
} from '../../../apis/calendar';
import CalendarInfo from '../CalendarInfo/CalendarInfo';
import { Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CalendarDataTypeBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  width: 55%;
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

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-10-12'));
  const [calendarTreatments, setCalendarTreatments] = useState([]);
  const [calendarPrescriptions, setCalendarPrescriptions] = useState([]);
  const [calendarDataType, setCalendarDataType] = useState('');

  const handleClickDataTypeBtn = (e) => {
    setCalendarDataType(e.target.innerHTML.slice(0, 4));
  };

  const selectDate = async (date) => {
    setSelectedDate(date);
    setCalendarDataType('');
    const formedDate = Number(String(createDateFormat(date)).slice(0, 6));
    const calendarTreatmentsData = await getCalendarTreatments(formedDate);

    const calendarPrescriptionsData = await getCalendarPrescriptions(
      formedDate,
    );
    setCalendarTreatments(calendarTreatmentsData.calendarTreatments);
    setCalendarPrescriptions(calendarPrescriptionsData.calendarPrescriptions);
  };

  const createDateFormat = (date) => {
    const year = String(date.$y);
    const month =
      date.$M + 1 < 10 ? '0' + String(date.$M + 1) : String(date.$M + 1);
    const day = date.$D < 10 ? '0' + String(date.$D) : String(date.$D);
    return Number(year + month + day);
  };

  const getFilteredData = (calendarData) => {
    return calendarData.filter(
      (data) => data.date === createDateFormat(selectedDate),
    )[0];
  };

  return (
    <CalendarContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={selectDate}
          renderInput={(params) => (
            <TextField {...params} sx={{ width: '100%' }} />
          )}
        />
      </LocalizationProvider>
      <CalendarDataTypeBtnContainer>
        <Button
          onClick={handleClickDataTypeBtn}
          variant="contained"
          style={{ backgroundColor: '#608fcb' }}
        >
          투약내역
        </Button>
        <Button
          onClick={handleClickDataTypeBtn}
          variant="contained"
          style={{ backgroundColor: '#608fcb' }}
        >
          진료내역
        </Button>
      </CalendarDataTypeBtnContainer>
      {calendarDataType && (
        <>
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
        </>
      )}
    </CalendarContainer>
  );
};

export default CalendarComponent;

import styled from 'styled-components';
import { useState } from 'react';
import CalendarComponent from '../../components/Calendar/CalendarComponent/CalendarComponent';

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Calendar = () => {
  const [calendarDataType, setCalendarDataType] = useState('투약내역');

  const clickBtn = (e) => {
    setCalendarDataType(e.target.innerHTML);
  };
  return (
    <CalendarContainer>
      <div>
        <button onClick={clickBtn}>투약내역</button>
        <button onClick={clickBtn}>진료내역</button>
      </div>

      <CalendarComponent calendarDataType={calendarDataType} />
    </CalendarContainer>
  );
};

export default Calendar;

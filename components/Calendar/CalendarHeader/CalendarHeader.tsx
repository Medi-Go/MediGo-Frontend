import React from 'react';
import styled from 'styled-components';

const CalendarHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarHeader = ({
  date,
  decreaseMonth,
  prevMonthButtonDisabled,
  increaseMonth,
  nextMonthButtonDisabled,
}) => (
  <CalendarHeaderContainer>
    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      <div>좌</div>
    </button>
    <div className="custom-month">
      {date.getFullYear()}년 {[date.getMonth() + 1]}월
    </div>
    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      <div>우</div>
    </button>
  </CalendarHeaderContainer>
);

export default CalendarHeader;

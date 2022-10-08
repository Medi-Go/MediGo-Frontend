import styled from 'styled-components';
import CalendarComponent from '../../components/Calendar/CalendarComponent/CalendarComponent';

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarComponent />
    </CalendarContainer>
  );
};

export default Calendar;

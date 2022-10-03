import styled from '@emotion/styled';

export const MedicineContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f3f5fc;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 50px;
`;

export const MedicineNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;
`;

export const NameText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  margin-left: 1rem;
`;

export const CountText = styled.div`
  background-color: #d6dfef;
  padding: 10px;
  color: #595959;
  width: 30%;
  text-align: center;
  border-radius: 0 50px 50px 0;
  padding: 1.4rem;
`;

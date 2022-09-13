import type { NextPage } from 'next';
import Image from 'next/Image';
import { useEffect } from 'react';
import styled from 'styled-components';
import Medicine from './Medicine';

interface MedicineListProps {
  title: string;
  data: any[];
}

const MedicineListContainer = styled.div`
  background-color: #f4f5f7;
  border-radius: 20px;
  margin: 20px;
  margin-top: 10px;
  height: 280px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 10px;
`;

const TitleText = styled.div`
  color: #595959;
  font-size: 18px;
  font-weight: bold;
`;

const MedicineCategoryText = styled.div`
  color: #595959;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
`;

const MedicineList = ({ title, data }: MedicineListProps) => {
  useEffect(() => {
    console.log('medicineList', data);
  }, [data]);
  return (
    <MedicineListContainer>
      <TitleWrapper>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
      {title === '복용중인 약' ? (
        data.map((medicine) => <Medicine />)
      ) : (
        <Medicine />
      )}
    </MedicineListContainer>
  );
};

export default MedicineList;

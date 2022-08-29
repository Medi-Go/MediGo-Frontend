import type { NextPage } from 'next';
import Image from 'next/Image';
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

const ArrowBtn = styled.div`
  width: 34px;
  height: 34px;
`;

const MedicineCategoryText = styled.div`
  color: #595959;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
`;

const MedicineList: NextPage<MedicineListProps> = ({ title, data }) => {
  return (
    <MedicineListContainer>
      <TitleWrapper>
        <TitleText>{title}</TitleText>
        <ArrowBtn>
          <Image
            src={'/images/arrowRightBtn.png'}
            width={40}
            height={40}
            alt={'arrowRightBtn'}
          />
        </ArrowBtn>
      </TitleWrapper>
      {data.map((medicine) => (
        <Medicine
          key={medicine.medicineList[0].id}
          id={medicine.medicineList[0].id}
          name={medicine.medicineList[0].name}
          group={medicine.medicineList[0].group}
          effect={medicine.medicineList[0].effect}
          combinedTaboo={medicine.medicineList[0].combinedTaboo}
          ageTaboo={medicine.medicineList[0].ageTaboo}
          ingredients={medicine.medicineList[0].ingredients}
          company={medicine.medicineList[0].company}
          cost={medicine.medicineList[0].cost}
          left={medicine.medicineList[0].left}
        />
      ))}
    </MedicineListContainer>
  );
};

export default MedicineList;

import Image from 'next/Image';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface MedicineProps {
  type: string;
  effect: string;
  medicines: number;
  medicineName: string;
  duplicatedMedicineCases: number;
}

const MedicineContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f4f5f7;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 50px;
`;

const MedicineNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;
`;

const MedicineIconImage = styled.div`
  margin-right: 10px;
  border-radius: 20px;
  box-shadow: 0px 5px 5px lightgray;
`;

const NameText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
`;

const CountText = styled.div`
  background-color: #bad1ff;
  padding: 10px;
  color: #595959;
  width: 30%;
  text-align: center;
  border-radius: 0 50px 50px 0;
  padding: 1.4rem;
`;

const Medicine = ({
  type,
  effect,
  medicines,
  medicineName,
  duplicatedMedicineCases,
}: MedicineProps) => {
  const router = useRouter();

  const goToDetail = () => {
    // router.push(
    //   {
    //     pathname: '/detail',
    //     query: {
    //       name: name,
    //       group: group,
    //       effect: effect,
    //       combinedTaboo: combinedTaboo,
    //       ageTaboo: ageTaboo,
    //       ingredients: ingredients,
    //       company: company,
    //       cost: cost,
    //     },
    //   },
    //   '/detail',
    // );
  };
  return (
    <>
      {type === 'medicineEffects' ? (
        <MedicineContainer>
          <MedicineNameContainer>
            <MedicineIconImage>
              <Image
                src={'/icon-192x192.png'}
                width={40}
                height={40}
                alt={'medicineIcon'}
              />
            </MedicineIconImage>
            <NameText>{effect}</NameText>
          </MedicineNameContainer>
          <CountText>{medicines}종</CountText>
        </MedicineContainer>
      ) : (
        <MedicineContainer onClick={goToDetail}>
          <MedicineNameContainer>
            <MedicineIconImage>
              <Image
                src={'/icon-192x192.png'}
                width={40}
                height={40}
                alt={'medicineIcon'}
              />
            </MedicineIconImage>
            <NameText>{medicineName}</NameText>
          </MedicineNameContainer>
          <CountText>{duplicatedMedicineCases}개</CountText>
        </MedicineContainer>
      )}
    </>
  );
};

export default Medicine;

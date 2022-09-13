import Image from 'next/Image';
import { useRouter } from 'next/router';
import {
  MedicineContainer,
  MedicineNameContainer,
  MedicineIconImage,
  NameText,
  CountText,
} from './style';

interface MedicineProps {
  type: string;
  effect: string;
  medicines: number;
  medicineName: string;
  duplicatedMedicineCases: number;
}

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

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setMedicines, selectMedicines } from '../../store/slices/medicines';
import Medicines from '../../components/Medicines/Medicines';
import { getMedicines } from '../../apis/medicine';
import { useEffect } from 'react';
import Image from 'next/image';

const MainLogo = styled.div`
  margin-top: 20px;
  width: 150px;
`;

const Main = () => {
  const dispatch = useDispatch();
  const { medicineEffects, duplicatedMedicines } = useSelector(selectMedicines);
  useEffect(() => {
    const getMyMedicinesData = async () => {
      const { medicineEffects, duplicatedMedicines } = await getMedicines();
      dispatch(setMedicines({ medicineEffects, duplicatedMedicines }));
      console.log('medicineEffects', medicineEffects);
      console.log('duplicatedMedicines', duplicatedMedicines);
    };

    getMyMedicinesData();
  }, []);

  return (
    <>
      {
        <>
          <MainLogo>
            <Image
              src={'/images/mainLogo.png'}
              width={130}
              height={37}
              alt={'arrowRightBtn'}
            />
          </MainLogo>
          <Medicines title="복용중인 약" medicineData={medicineEffects} />
          <Medicines title="중복 약물" medicineData={duplicatedMedicines} />
        </>
      }
    </>
  );
};

export default Main;

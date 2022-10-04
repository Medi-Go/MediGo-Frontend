import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import InfoModal from '../../components/InfoModal/InfoModal';
import { useSelector } from 'react-redux';
import { selectPrescription } from '../../store/slices/prescription';
import { getInputInfo, patchInputInfo } from '../../apis/info';
import { getPrescriptionInputValue } from '../../utils/input';
import styled from '@emotion/styled';
export const PrescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 3rem;
`;

export const PrescriptionInfo = styled.div`
  margin: 10px;
`;

export const PrescriptionInput = styled.input`
  margin: 5px;
  width: 3rem;
`;

const Input = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [prescriptions, setPrescription] = useState([]);

  useEffect(() => {
    getPrescriptions();
  }, []);

  const handleCreateModalOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const handleCreateModalClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPrescriptionEditData();
    console.log(e);
  };

  const getPrescriptions = async () => {
    const data = await getInputInfo(month);
    console.log('data', data);
    setPrescription(data.prescriptions);
  };

  const createPrescriptionEditData = async () => {
    const prescriptionsData = [];
    prescriptions.map((prescription) => {
      prescriptionsData.push({
        prescriptionId: prescription.prescriptionId,
        administerInterval: getPrescriptionInputValue(
          `#administerInterval-${prescription.prescriptionId}`,
        ),
        dailyCount: getPrescriptionInputValue(
          `#dailyCount-${prescription.prescriptionId}`,
        ),
        totalDayCount: getPrescriptionInputValue(
          `#totalDayCount-${prescription.prescriptionId}`,
        ),
      });
    });

    await patchInputInfo(prescriptionsData);
  };

  const { month } = useSelector(selectPrescription);

  return (
    <>
      <Button onClick={handleCreateModalOpen}>생성</Button>
      <InfoModal isOpen={isModalOpen} onClose={handleCreateModalClose} />
      <form onSubmit={handleSubmit}>
        {prescriptions.map((prescription) => (
          <PrescriptionContainer key={prescription.prescriptionId}>
            <PrescriptionInfo>{prescription.treatDate}</PrescriptionInfo>
            <PrescriptionInfo>{prescription.treatMedicalName}</PrescriptionInfo>
            <PrescriptionInfo>{prescription.treatType}</PrescriptionInfo>
            <PrescriptionInput
              id={`administerInterval-${prescription.prescriptionId}`}
              name="administerInterval"
            ></PrescriptionInput>
            <PrescriptionInput
              id={`dailyCount-${prescription.prescriptionId}`}
              name="dailyCount"
            ></PrescriptionInput>
            <PrescriptionInput
              id={`totalDayCount-${prescription.prescriptionId}`}
              name="totalDayCount"
            ></PrescriptionInput>
          </PrescriptionContainer>
        ))}
        <Button type="submit">Edit</Button>
      </form>
    </>
  );
};

export default Input;

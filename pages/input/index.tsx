import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import InfoModal from '../../components/InfoModal/InfoModal';
import { useSelector } from 'react-redux';
import { selectPrescription } from '../../store/slices/prescription';
import { getInputInfo, patchInputInfo } from '../../apis/info';
import { getPrescriptionInputValue } from '../../utils/input';
import {
  PrescriptionContainer,
  PrescriptionInfo,
  PrescriptionInput,
} from './style';

const Input = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [prescriptions, setPrescription] = useState([]);

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
    getPrescriptions();
    createPrescriptionEditData(e);
    console.log(e);
  };
  const handleEditPrescription = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const createPrescriptionEditData = async (e) => {
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

  const getPrescriptions = async () => {
    const data = await getInputInfo(month);
    console.log('data', data);
    setPrescription(data.prescriptions);
  };

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

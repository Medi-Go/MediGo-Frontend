import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import InfoModal from '../../components/InfoModal/InfoModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrescription } from '../../store/slices/prescription';
import { getInputInfo, patchInputInfo } from '../../apis/info';
import { getPrescriptionInputValue } from '../../utils/input';
import styled from '@emotion/styled';

const PrescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const PrescriptionInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const PrescriptionMedicineInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const PrescriptionInfo = styled.div`
  margin: 10px;
`;

const PrescriptionInput = styled.input`
  margin: 5px;
  width: 3rem;
`;

const MedicineEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [prescriptions, setPrescription] = useState([]);
  const dispatch = useDispatch();

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
    getPrescriptions();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPrescriptionEditData();
    console.log(e);
  };

  const getPrescriptions = async () => {
    const data = await getInputInfo(month);
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
      <Button onClick={handleCreateModalOpen}>투약 정보 불러오기</Button>
      <InfoModal isOpen={isModalOpen} onClose={handleCreateModalClose} />
      <form onSubmit={handleSubmit}>
        {prescriptions.map((prescription) => (
          <PrescriptionContainer key={prescription.prescriptionId}>
            <PrescriptionInfoWrapper>
              <PrescriptionInfo>{prescription.treatDate}</PrescriptionInfo>
              <PrescriptionInfo>
                {prescription.treatMedicalName}
              </PrescriptionInfo>
              <PrescriptionInfo>{prescription.treatType}</PrescriptionInfo>
            </PrescriptionInfoWrapper>
            <PrescriptionInfoWrapper>
              <PrescriptionMedicineInfoWrapper>
                <div>투약일수</div>
                <PrescriptionInput
                  id={`administerInterval-${prescription.prescriptionId}`}
                  name="administerInterval"
                ></PrescriptionInput>
              </PrescriptionMedicineInfoWrapper>
              <PrescriptionMedicineInfoWrapper>
                <div>투약횟수</div>
                <PrescriptionInput
                  id={`dailyCount-${prescription.prescriptionId}`}
                  name="dailyCount"
                ></PrescriptionInput>
              </PrescriptionMedicineInfoWrapper>
              <PrescriptionMedicineInfoWrapper>
                <div>총 투약횟수</div>
                <PrescriptionInput
                  id={`totalDayCount-${prescription.prescriptionId}`}
                  name="totalDayCount"
                ></PrescriptionInput>
              </PrescriptionMedicineInfoWrapper>
            </PrescriptionInfoWrapper>
          </PrescriptionContainer>
        ))}
        <Button type="submit">약물 업데이트</Button>
      </form>
    </>
  );
};

export default MedicineEdit;

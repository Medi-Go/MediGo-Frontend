import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import InfoModal from '../../components/InfoModal/InfoModal';
import { useSelector } from 'react-redux';
import { selectPrescription } from '../../store/slices/prescription';
import { getInputInfo, patchInputInfo } from '../../apis/info';
import { getPrescriptionInputValue } from '../../utils/input';
import styled from '@emotion/styled';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';

const PrescriptionFrom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;

const PrescriptionsContainer = styled.div`
  overflow: scroll;
  height: 27rem;
  width: 90%;
  padding-bottom: 1rem;
`;

const PrescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrescriptionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const PrescriptionDateInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PrescriptionNameInfo = styled.div`
  padding-left: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const PrescriptionMedicineInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2rem;
`;

const PrescriptionMedicineInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fffffff;
  background-color: #f3f5fc;
  margin: 0rem 0.8rem;
  padding: 0.2rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 5px 3px #dcdcdc;
`;

const PrescriptionDateInfoText = styled.div`
  margin: 1rem;
  font-size: 0.85rem;
`;

const PrescriptionTypeInfoText = styled.div`
  margin: 1rem;
  font-size: 0.85rem;
  color: #385885;
`;

const PrescriptionMedicineInputText = styled.div`
  font-size: 0.7rem;
`;

const PrescriptionInput = styled.input`
  margin: 0.5rem;
  width: 2rem;
  border: none;
  :focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 83%;
`;

const MedicineEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [prescriptions, setPrescription] = useState([]);
  const { month } = useSelector(selectPrescription);

  useEffect(() => {
    getPrescriptions();
  }, [month]);

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

  return (
    <PrescriptionFrom>
      <PrescriptionsContainer>
        {prescriptions.map((prescription) => (
          <PrescriptionContainer key={prescription.prescriptionId}>
            <PrescriptionInfoWrapper>
              <PrescriptionDateInfo>
                <PrescriptionDateInfoText>
                  {prescription.treatDate}
                </PrescriptionDateInfoText>
                <PrescriptionTypeInfoText>
                  {prescription.treatType}
                </PrescriptionTypeInfoText>
              </PrescriptionDateInfo>
              <PrescriptionNameInfo>
                {prescription.treatMedicalName}
              </PrescriptionNameInfo>
            </PrescriptionInfoWrapper>
            <PrescriptionMedicineInputWrapper>
              <PrescriptionMedicineInfoWrapper>
                <VaccinesOutlinedIcon
                  sx={{ width: '2.5rem', height: '2.5rem' }}
                />
                <PrescriptionMedicineInputText>
                  투약일수
                </PrescriptionMedicineInputText>
                <PrescriptionInput
                  id={`administerInterval-${prescription.prescriptionId}`}
                  name="administerInterval"
                ></PrescriptionInput>
              </PrescriptionMedicineInfoWrapper>
              <PrescriptionMedicineInfoWrapper>
                <MedicationOutlinedIcon
                  sx={{ width: '2.5rem', height: '2.5rem' }}
                />
                <PrescriptionMedicineInputText>
                  투약횟수
                </PrescriptionMedicineInputText>
                <PrescriptionInput
                  id={`dailyCount-${prescription.prescriptionId}`}
                  name="dailyCount"
                ></PrescriptionInput>
              </PrescriptionMedicineInfoWrapper>
              <PrescriptionMedicineInfoWrapper>
                <MedicalServicesOutlinedIcon
                  sx={{ width: '2.5rem', height: '2.5rem' }}
                />
                <PrescriptionMedicineInputText>
                  총 투약횟수
                </PrescriptionMedicineInputText>
                <PrescriptionInput
                  id={`totalDayCount-${prescription.prescriptionId}`}
                  name="totalDayCount"
                ></PrescriptionInput>
              </PrescriptionMedicineInfoWrapper>
            </PrescriptionMedicineInputWrapper>
          </PrescriptionContainer>
        ))}
      </PrescriptionsContainer>
      <ButtonContainer>
        <Button
          onClick={handleCreateModalOpen}
          variant="contained"
          style={{ backgroundColor: '#608fcb' }}
        >
          달 입력
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{ backgroundColor: '#608fcb' }}
        >
          약물 업데이트
        </Button>
      </ButtonContainer>
      <InfoModal isOpen={isModalOpen} onClose={handleCreateModalClose} />
    </PrescriptionFrom>
  );
};

export default MedicineEdit;

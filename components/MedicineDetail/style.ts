import styled from '@emotion/styled';

export const MedicineDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MedicineName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  border-radius: 2rem;
  border: 1px solid #d6dfef;
  padding: 0.5rem 0.3rem;
  width: 4.5rem;
`;

export const MedicineNameText = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MedicineRemainCount = styled.div`
  font-size: 0.6rem;
  margin-top: 0.2rem;
`;

export const DuplicatedCaseDate = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const DuplicatedCaseMedicalName = styled.div`
  font-size: 11px;
  margin-top: 0.2rem;
`;

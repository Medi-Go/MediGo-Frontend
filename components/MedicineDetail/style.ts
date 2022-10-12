import styled from '@emotion/styled';

export const MedicineDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  border-radius: 2rem;
  border: 1px solid #d6dfef;
  padding: 0.5rem 0.3rem;
  width: 4.5rem;
`;

export const DetailNameText = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DetailNumberText = styled.div`
  font-size: 0.6rem;
  margin-top: 0.2rem;
`;

import { Card, Typography, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
export const PreviewImage = styled.img`
  width: 100%;
  height: 342px;
  margin-top: 1rem;
  border-radius: 8px;
`;

export const CardWrapper = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 608px;
  width: 100%;
`;

export const ModalTextField = styled(TextField)`
  font-size: 6px;
`;

export const SubmitModalButton = styled(Button)`
  float: right;
  margin-top: 0.5rem;
  margin-left: auto;
`;

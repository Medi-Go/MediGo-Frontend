import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { IconButton, Modal, CardHeader, CardContent, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { InfoModalType } from '../../interfaces/info';
import { CardWrapper, SubmitModalButton, ModalTextField } from './style';
import { setPrescription } from '../../store/slices/prescription';

const InfoModal = ({ isOpen, onClose }: InfoModalType) => {
  const [month, setMonth] = useState(1);

  const dispatch = useDispatch();

  const handleClick = async (e) => {
    dispatch(setPrescription({ month: month }));
    onClose(e);
  };

  const handleChange = (e) => {
    setMonth(Number(e.target.value));
  };

  return (
    <Modal
      open={Boolean(isOpen)}
      onClose={onClose}
      BackdropProps={{
        sx: {
          backgroundColor: '#1118271A',
        },
      }}
    >
      <CardWrapper>
        <CardHeader
          action={
            <IconButton aria-label="delete" onClick={onClose}>
              <ClearIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ padding: '0 1rem 6rem' }}>
          <ModalTextField
            rows={1}
            placeholder="몇 달 내의 약물 데이터를 받아올지 입력해주세요(1~12 내에서 입력해주세요)"
            id="month"
            name="month"
            onChange={handleChange}
            value={month}
            fullWidth={true}
          />
          <Box sx={{ display: 'flex' }}>
            <SubmitModalButton
              type="submit"
              size="medium"
              // disabled={isSubmitting}
              onClick={handleClick}
            >
              Load
            </SubmitModalButton>
          </Box>
        </CardContent>
      </CardWrapper>
    </Modal>
  );
};

export default InfoModal;

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import React, { useRef } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { IconButton, Modal, CardHeader, CardContent, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { InfoModalType } from '../../interfaces/info';
import { getInputInfo, patchInputInfo } from '../../apis/info';
import {
  CardWrapper,
  ModalErrorMessage,
  SubmitModalButton,
  ModalTextField,
} from './style';
import { setMedicine } from '../../store/slices/medicine';
import { PrescriptionType } from '../../interfaces/info.d';

const InfoModal = ({ month, modalType, isOpen, onClose }: InfoModalType) => {
  const exitRef = useRef<any>(null);

  const dispatch = useDispatch();

  const handleInfoSubmit = async (
    values: {
      month: number;
    },
    helpers: FormikHelpers<{ month: number }>,
  ) => {
    console.log(values.month);
    let returnApiData;

    switch (modalType) {
      case 'LOAD':
        returnApiData = await getInputInfo(values.month);
        console.log(returnApiData);
        // dispatch(setMedicine(returnApiData));
        break;
      case 'EDIT':
        returnApiData = await patchInputInfo(values.month);
        console.log(returnApiData);
        // dispatch(setMedicine(returnApiData));
        break;
    }

    helpers.resetForm();
  };

  const handleClick = async (values: { month: number }) => {
    const returnApiData = await getInputInfo(month);
    console.log(returnApiData);
  };

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        month: month || 1,
      },
      onSubmit: (values, helpers) => {
        helpers.setSubmitting(true);
        handleInfoSubmit(values, helpers);
        exitRef.current.click();
        helpers.setSubmitting(false);
      },
      validationSchema: Yup.object({
        contents: Yup.number()
          .max(12, '1년 이후의 데이터는 받아올 수 없습니다.')
          .required(' 입력해주세요'),
      }),
      validateOnChange: true,
    });

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
            <IconButton aria-label="delete" ref={exitRef} onClick={onClose}>
              <ClearIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ padding: '0 1rem 6rem' }}>
          <form onSubmit={handleSubmit}>
            <ModalTextField
              rows={1}
              placeholder="몇 달 내의 약물 데이터를 받아올지 입력해주세요(1~12 내에서 입력해주세요)"
              id="month"
              name="month"
              onChange={handleChange}
              value={values.month}
              fullWidth={true}
              {...(errors.month && {
                error: true,
                helperText: errors.month,
              })}
            />
            <Box sx={{ display: 'flex' }}>
              <SubmitModalButton
                type="submit"
                size="medium"
                disabled={isSubmitting}
                onClick={handleClick}
              >
                Load
              </SubmitModalButton>
            </Box>
          </form>
        </CardContent>
      </CardWrapper>
    </Modal>
  );
};

export default InfoModal;

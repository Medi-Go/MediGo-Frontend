import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import React, { useRef } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import {
  IconButton,
  Modal,
  Avatar,
  CardHeader,
  CardContent,
  Box,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { InfoModalType } from '../../interfaces/info';

import {
  CardWrapper,
  ModalErrorMessage,
  SubmitModalButton,
  ModalTextField,
} from './style';

const InfoModal = ({ month, modalType, isOpen, onClose }: InfoModalType) => {
  const exitRef = useRef<any>(null);

  const dispatch = useDispatch();

  const handleInfoSubmit = async (
    values: {
      month: number;
    },
    helpers: FormikHelpers<{ month: number }>,
  ) => {
    const postFormData = new FormData();
    let returnApiData;

    // postFormData.append('month', values.month);

    // switch (modalType) {
    //   case 'CREATE':
    //     returnApiData = await postCommunityPostApi(postFormData);
    //     dispatch(createPost(returnApiData));
    //     break;
    //   case 'EDIT':
    //     returnApiData = await editCommunityPostApi(postId, postFormData);
    //     dispatch(editPost(returnApiData));
    //     break;
    // }

    helpers.resetForm();
  };

  const formik = useFormik({
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
      contents: Yup.string()
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
          <form onSubmit={formik.handleSubmit}>
            <ModalTextField
              rows={1}
              placeholder="몇 달 내의 약물 데이터를 받아올지 입력해주세요(1~12 내에서 입력해주세요)"
              id="month"
              onChange={formik.handleChange}
              value={formik.values.month}
              fullWidth={true}
              {...(formik.errors.month && {
                error: true,
                helperText: formik.errors.month,
              })}
            />
            <Box sx={{ display: 'flex' }}>
              <SubmitModalButton
                type="submit"
                size="medium"
                disabled={formik.isSubmitting}
              >
                입력
              </SubmitModalButton>
            </Box>
          </form>
        </CardContent>
      </CardWrapper>
    </Modal>
  );
};

export default InfoModal;

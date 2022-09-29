import * as yup from 'yup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Image from 'next/image';
import { signUp } from '../../apis/user';
import { errorType } from '../../interfaces/error';
import { Select } from '../../components/index';
import { AxiosError, AxiosResponse } from 'axios';
import { setStorageItem } from '../../utils/storage';
import { updateUser, selectUser } from '../../store/slices/user';
import { Button, CircularProgress, TextField } from '@mui/material';
import { carrierOptions } from '../../constants/selectOptions';
import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 392px;
  height: 444px;
  padding: 1rem 1rem 0;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 2rem;
`;

export const CarrierContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CarrierWrapper = styled.div`
  width: calc(50%);
`;

const MainLogo = styled(Image)`
  margin-top: 20px;
`;

interface FormDataType {
  email: any;
  name: string;
  phoneNumber: string;
  jumin: string;
  carrier: string;
}

const Edit = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    setValues,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      phoneNumber: '',
      jumin: '',
      carrier: '',
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .trim('앞, 뒤 공백을 제거해주세요')
        .strict()
        .required('이름을 입력해 주세요.'),
      phoneNumber: yup.string().required('전화번호를 입력해주세요'),
      jumin: yup.string().required('생년월일을 입력해주세요'),
      carrier: yup.string().required('통신사를 입력해주세요.'),
    }),
    onSubmit: async (values) => {
      const formData: FormDataType = {
        email: values.email,
        name: values.name,
        phoneNumber: values.phoneNumber,
        jumin: values.jumin,
        carrier: values.carrier,
      };
    },
  });

  const user = useSelector(selectUser);

  useEffect(() => {
    console.log(user);
    setValues({
      email: user.user.email,
      name: user.user.name,
      phoneNumber: user.user.phoneNumber,
      jumin: user.user.jumin,
      carrier: user.user.carrier,
    });
  }, [user]);

  return (
    <FormContainer>
      <MainLogo
        src={'/images/mainLogo.png'}
        width={130}
        height={40}
        alt={'arrowRightBtn'}
      />
      <div>회원정보 수정</div>
      <StyledForm onSubmit={handleSubmit}>
        <FormInputContainer>
          <TextField
            id="name"
            name="name"
            label="이름*"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            disabled={isSubmitting}
          />
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="전화번호*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            disabled={isSubmitting}
          />
          <TextField
            id="jumin"
            name="jumin"
            label="생년월일*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.jumin}
            error={touched.jumin && Boolean(errors.jumin)}
            helperText={touched.jumin && errors.jumin}
            disabled={isSubmitting}
          />
          <CarrierContainer>
            <CarrierWrapper>
              <Select
                id="carrier"
                name="carrier"
                label="통신사*"
                onChange={handleChange}
                options={carrierOptions}
                value={values.carrier}
                error={touched.carrier && Boolean(errors.carrier)}
                disabled={isSubmitting}
                fullWidth
              />
            </CarrierWrapper>
          </CarrierContainer>
          <Button size="large" type="submit" disabled={isSubmitting} fullWidth>
            {isSubmitting ? (
              <CircularProgress
                color="secondary"
                size="1.5rem"
                sx={{ margin: '-0.25rem' }}
              />
            ) : (
              '수정'
            )}
          </Button>
        </FormInputContainer>
      </StyledForm>
    </FormContainer>
  );
};

export default Edit;

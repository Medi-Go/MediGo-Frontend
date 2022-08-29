import Image from 'next/Image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { getQueryString } from '../../utils/quertString';
import { useFormik } from 'formik';
import { signUp } from '../../apis/user';

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ServiceTitle = styled.div`
  font-size: 40px;
  color: navy;
  font-weight: bold;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const RegisterInput = styled.input`
  margin-top: 50px;
  width: 300px;
  height: 40px;
`;

const RegisterBtn = styled.button`
  margin-top: 50px;
  height: 40px;
  background-color: navy;
  color: white;
  font-weight: bold;
`;

const Signup = () => {
  const router = useRouter();

  const email = getQueryString('email', 'string') + '';

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
  } = useFormik({
    initialValues: {
      nickname: '',
      field: '',
      career: '',
      MBTI: '',
    },
    validationSchema: yup.object({
      nickname: yup
        .string()
        .trim('앞, 뒤 공백을 제거해주세요')
        .strict()
        .max(16, '닉네임은 최대 16글자 까지 가능합니다.')
        .required('닉네임을 입력해 주세요.'),
      field: yup.string().required('직무를 입력해주세요'),
      career: yup.string().required('경력을 입력해주세요'),
      MBTI: yup.string().required('MBTI를 입력해주세요.'),
    }),
    onSubmit: async (values) => {
      const formData = {
        email,
        nickname: values.nickname,
        field: values.field,
        career: values.career,
        MBTI: values.MBTI,
      };

      try {
        const data = await signUp(formData);
        dispatch(loginUser(data.member));
        setStorageItem('token', data.accesstoken);
        navigate('/', { replace: true });
      } catch (error) {
        const { response } = error as AxiosError;
        const { data }: { data: errorType } = response as AxiosResponse;
        const { errorCode } = data;
      }
    },
  });

  return (
    <RegisterPageContainer>
      <ServiceTitle>
        <Image
          src={'/images/mainLogo.png'}
          width={130}
          height={40}
          alt={'arrowRightBtn'}
        />
      </ServiceTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput
          type="text"
          placeholder="이름을 입력해주세요"
          id="name"
          required
        ></RegisterInput>
        <RegisterInput
          type="text"
          placeholder="핸드폰 번호를 입력해주세요 ex) 01032145464"
          id="phoneNumber"
          required
        ></RegisterInput>
        <RegisterInput
          type="text"
          placeholder="생년월일을 입력해주세요 ex) 19970914"
          id="jumin"
          required
        ></RegisterInput>
        <select id="carrier" name="carrier">
          <option value="">선택하세요</option>
          <option value="KT">KT</option>
          <option value="SKT">SKT</option>
          <option value="LG">LG</option>
        </select>
        <RegisterBtn type="submit">회원가입</RegisterBtn>
      </RegisterForm>
    </RegisterPageContainer>
  );
};

export default Signup;

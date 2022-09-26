import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setStorageItem } from '../../utils/storage';
import { loginUser } from '../../store/slices/user';
import { CircularProgress, Typography } from '@mui/material';
import { login } from '../../apis/user';
import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  max-width: 640px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  padding: 15rem 0;
`;

const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = Number(router.query.id);

  const loginRequest = async () => {
    try {
      console.log(userId);
      const data = await login(userId);
      dispatch(loginUser(data.memberResponse));
      setStorageItem('token', data.accessToken);
    } catch (e) {
      console.error(e);
    } finally {
      router.push('/main');
    }
  };

  useEffect(() => {
    userId && loginRequest();
  }, [userId]);

  return (
    <LoginContainer>
      <Typography variant="h5">로그인 요청 중입니다.</Typography>
      <CircularProgress color="primary" />
    </LoginContainer>
  );
};

export default Auth;

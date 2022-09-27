import type { NextPage } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const LoginPageContainer = styled.div`
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

const IconWrapper = styled.div`
  margin-top: 30px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

const GoogleLoginBtn = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  width: 80%;
  height: 40px;
  background-color: white;
  font-weight: bold;
  font-size: 16px;
`;

const NaverLoginBtn = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  width: 80%;
  height: 40px;
  background-color: #04cf5c;
  font-weight: bold;
  color: white;
  font-size: 16px;
  border: 0px;
  margin-top: 20px;
`;

const Login: NextPage = () => {
  const router = useRouter();

  return (
    <LoginPageContainer>
      <ServiceTitle>MediGo</ServiceTitle>
      <IconWrapper></IconWrapper>
      <BtnWrapper>
        <GoogleLoginBtn
          onClick={() => {
            router.push('/login/auth');
          }}
        >
          구글로 시작하기
        </GoogleLoginBtn>
        <NaverLoginBtn>네이버로 시작하기</NaverLoginBtn>
      </BtnWrapper>
    </LoginPageContainer>
  );
};

export default Login;

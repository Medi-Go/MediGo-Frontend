import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';

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

const Login = () => {
  const router = useRouter();

  return (
    <LoginPageContainer>
      <ServiceTitle>MediGo</ServiceTitle>
      <IconWrapper>
        <Image
          src={'/icon-512x512.png'}
          width={250}
          height={250}
          alt={'medicineIcon'}
        />
      </IconWrapper>
      <BtnWrapper>
        <GoogleLoginBtn
          onClick={() => {
            router.push('http://www.medigo.p-e.kr/oauth2/authorization/google');
          }}
        >
          구글로 시작하기
        </GoogleLoginBtn>
      </BtnWrapper>
    </LoginPageContainer>
  );
};

export default Login;

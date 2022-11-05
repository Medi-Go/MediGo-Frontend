import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { connectKakaoAuth } from '../../apis/connection';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

const ConnectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerWrapper = styled.div`
  margin-top: 14rem;
`;

const ConnectionContents = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  width: 70%;
  margin-top: 5rem;
  text-align: center;
`;

const Connection = () => {
  const router = useRouter();
  const handleKaKaoAuthConnection = async () => {
    await connectKakaoAuth();
    router.push('/connection/data');
  };

  return (
    <ConnectionPageContainer>
      <SpinnerWrapper>
        <CircularProgress />
      </SpinnerWrapper>
      <ConnectionContents>
        아래 버튼을 클릭한 후 카카오톡 인증 메세지를 확인해주세요
      </ConnectionContents>
      <Button
        onClick={handleKaKaoAuthConnection}
        variant="contained"
        style={{ backgroundColor: '#608fcb', width: '25%', margin: '4rem' }}
      >
        Continue
      </Button>
    </ConnectionPageContainer>
  );
};

export default Connection;

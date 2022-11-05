import { Button } from '@mui/material';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
// import { connectMydata } from '../../apis/connection';
// import { test } from '../../apis/info';

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

const Mydata = () => {
  const handleConnectMydata = async () => {
    // await test();
  };

  return (
    <ConnectionPageContainer>
      <SpinnerWrapper>
        <CircularProgress />
      </SpinnerWrapper>
      <ConnectionContents>
        카카오톡 인증 완료 후 아래 버튼을 눌러주세요
      </ConnectionContents>
      <Button
        onClick={handleConnectMydata}
        variant="contained"
        style={{ backgroundColor: '#608fcb', width: '25%', margin: '4rem' }}
      >
        Continue
      </Button>
    </ConnectionPageContainer>
  );
};

export default Mydata;

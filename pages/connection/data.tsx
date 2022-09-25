import { Button } from '@mui/material';
// import { connectMydata } from '../../apis/connection';
// import { test } from '../../apis/info';

const Mydata = () => {
  const handleConnectMydata = async () => {
    // await test();
  };

  return (
    <>
      <div>카카오톡 인증 후, 아래 버튼을 눌러주세요</div>
      <Button onClick={handleConnectMydata}>계속하기</Button>
    </>
  );
};

export default Mydata;

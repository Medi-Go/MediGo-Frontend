import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { connectKakaoAuth } from '../../apis/connection';

const Connection = () => {
  const router = useRouter();
  const handleKaKaoAuthConnection = async () => {
    await connectKakaoAuth();
    router.push('/connection/data');
  };

  return (
    <>
      <div>
        아래 버튼을 클릭한 후, 고객님의 카카오톡으로 인증 메세지를 확인해주세요
      </div>
      <Button onClick={handleKaKaoAuthConnection}>계속하기</Button>
    </>
  );
};

export default Connection;

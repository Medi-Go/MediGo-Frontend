import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const Profile = () => {
  const router = useRouter();

  const handleMoveInputPage = () => {
    router.push('/input');
  };

  const handleMoveProfileEditPage = () => {
    router.push('/profile/edit');
  };

  return (
    <>
      <div>Profile</div>
      <Button onClick={handleMoveProfileEditPage}>회원정보 수정</Button>
      <Button onClick={handleMoveInputPage}>생성</Button>
    </>
  );
};

export default Profile;

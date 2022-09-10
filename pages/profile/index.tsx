import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const Profile = () => {
  const router = useRouter();

  const handleMoveInputPage = () => {
    router.push('/input');
  };

  return (
    <>
      <div>Profile</div>
      <Button onClick={handleMoveInputPage}>생성</Button>
    </>
  );
};

export default Profile;

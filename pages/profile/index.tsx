import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/user';
import { Button, Avatar } from '@mui/material';
import styled from '@emotion/styled';

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  margin-top: 10rem;
`;

const EditBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  margin-top: 3rem;
`;

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const EditBtn = styled(Button)``;

const Profile = () => {
  const router = useRouter();

  const handleMoveInputPage = () => {
    router.push('/input');
  };

  const handleMoveProfileEditPage = () => {
    router.push('/profile/edit');
  };

  const { user } = useSelector(selectUser);
  return (
    <ProfilePageContainer>
      <AvatarContainer>
        <Avatar
          src={user.profileImageUrl}
          alt=""
          sx={{ width: '7.5rem', height: '7.5rem' }}
        />
      </AvatarContainer>
      <UserName>{user.name}</UserName>
      <EditBtnContainer>
        <EditBtn
          onClick={handleMoveProfileEditPage}
          variant="contained"
          style={{ backgroundColor: '#89b0e1' }}
        >
          회원정보 수정
        </EditBtn>
        <EditBtn
          onClick={handleMoveInputPage}
          variant="contained"
          style={{ backgroundColor: '#89b0e1' }}
        >
          약물정보 수정
        </EditBtn>
      </EditBtnContainer>
    </ProfilePageContainer>
  );
};

export default Profile;

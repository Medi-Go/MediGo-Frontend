import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/user';
import { Button, Avatar, IconButton } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import InputIcon from '@mui/icons-material/Input';
import styled from '@emotion/styled';

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  margin-top: 7rem;
`;

const MyDataUpdateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

const MyDataUpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;
const MyDataUpdateTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;
const MyDataUpdateInfo = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
`;

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const EditBtn = styled(Button)`
  margin-top: 2rem;
`;

const Profile = () => {
  const router = useRouter();
  const { user } = useSelector(selectUser);

  const handleMoveInputPage = () => {
    router.push('/profile/medicineEdit');
  };

  const handleMoveProfileEditPage = () => {
    router.push('/profile/edit');
  };

  return (
    <ProfilePageContainer>
      <AvatarContainer>
        <Avatar
          src={user.profileImageUrl}
          alt=""
          sx={{ width: '6.5rem', height: '6.5rem' }}
        />
      </AvatarContainer>
      <UserName>{user.name}</UserName>
      <EditBtn
        onClick={handleMoveProfileEditPage}
        variant="contained"
        style={{ backgroundColor: '#608fcb' }}
      >
        회원정보 수정
      </EditBtn>
      <MyDataUpdateContainer>
        <MyDataUpdateWrapper>
          <MyDataUpdateTitle>약물정보 업데이트 날짜</MyDataUpdateTitle>
          <MyDataUpdateInfo>
            {user.lastMyDataLoadUpdateTime + ''}
          </MyDataUpdateInfo>
          <IconButton style={{ color: '#385885' }}>
            <UpdateIcon />
          </IconButton>
        </MyDataUpdateWrapper>
        <MyDataUpdateWrapper>
          <MyDataUpdateTitle>투약횟수 업데이트 날짜</MyDataUpdateTitle>
          <MyDataUpdateInfo>
            {user.lastMyDataDetailUpdateTime + ''}
          </MyDataUpdateInfo>
          <IconButton
            onClick={handleMoveInputPage}
            style={{ color: '#385885' }}
          >
            <InputIcon />
          </IconButton>
        </MyDataUpdateWrapper>
      </MyDataUpdateContainer>
    </ProfilePageContainer>
  );
};

export default Profile;

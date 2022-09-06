import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import InfoModal from '../../components/InfoModal/InfoModal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUser } from '../../store/slices/user';

const Profile = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCreateModalOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const handleCreateModalClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <div>Profile</div>
      <Button onClick={handleCreateModalOpen}>생성</Button>
      <InfoModal
        month={11}
        modalType="LOAD"
        isOpen={isModalOpen}
        onClose={handleCreateModalClose}
      />
    </>
  );
};

export default Profile;

// import { Link } from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { selectUser } from '../../store/slices/user';
import {
  Avatar,
  ClickAwayListener,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import {
  MenuWrapper,
  LogoWrapper,
  NavContainer,
  ProfileText,
  ProfileWrapper,
} from './style';
import { removeStorageItem } from '../../utils/storage';
import { logout } from '../../apis/user';
import { logoutUser } from '../../store/slices/user';

const NavigationHeader = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const [profile, setProfile] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(menu);
  const isProfileOpen = Boolean(profile);

  const handleProfileOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfile(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenu(null);
  };

  const handleLogout = async () => {
    console.log('handlelogut');
    await logout();
    removeStorageItem('token');
    dispatch(logoutUser());
  };

  return (
    <>
      {user.isLogin && (
        <header>
          <NavContainer>
            <MenuWrapper>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <Button onClick={handleMenuOpen} style={{ color: 'gray' }}>
                  <MenuIcon />
                </Button>
              </ClickAwayListener>
              <Menu
                open={isMenuOpen}
                anchorEl={menu}
                autoFocus={false}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem>
                  <Link href={`/main`}>
                    <ProfileText>Main</ProfileText>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href={`/calendar`}>
                    <ProfileText>Calendar</ProfileText>
                  </Link>
                </MenuItem>
              </Menu>
            </MenuWrapper>
            <LogoWrapper>
              <Link href="/main" style={{ display: 'flex' }}>
                <Image src={'/images/mainLogo.png'} width={180} height={50} />
              </Link>
            </LogoWrapper>
            <ProfileWrapper>
              <ClickAwayListener onClickAway={handleProfileClose}>
                <Avatar
                  alt={user.user?.nickName}
                  src={user.user?.profileImageUrl}
                  onClick={handleProfileOpen}
                  sx={{
                    width: 35,
                    height: 35,
                    cursor: 'pointer',
                  }}
                />
              </ClickAwayListener>
              <Menu
                open={isProfileOpen}
                anchorEl={profile}
                autoFocus={false}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem>
                  <Link href={`/profile`}>
                    <ProfileText>Profile</ProfileText>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Link href={`/login`}>
                    <ProfileText>Logout</ProfileText>
                  </Link>
                </MenuItem>
              </Menu>
            </ProfileWrapper>
          </NavContainer>
        </header>
      )}
    </>
  );
};

export default NavigationHeader;

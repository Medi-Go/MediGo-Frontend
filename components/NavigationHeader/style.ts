import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 640px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d5db;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.8rem;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  width: inherit;
  max-width: inherit;
  height: inherit;
  font-weight: bold;
  border-bottom: 1px solid #d1d5db;
  background-color: white;
  z-index: 1000;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 0.75rem;
  font-weight: bold;
  color: #6b7280;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.8rem;
`;

export const ProfileText = styled.a`
  text-decoration: none;
  color: #000;
`;

import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import { getStorageItem } from '../../utils/storage';
import { loginUser, selectUser } from '../../store/slices/user';
import { selectFlashAlert } from '../../store/slices/flashAlert';
import { useAxiosInterceptor } from '../../hooks/useAxiosAuthInterceptor';
import { FlashAlert, NavigationHeader } from '../index';
import { getAuthUser } from '../../apis/user';
import { LayoutContainer } from './style';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const state = useSelector(selectFlashAlert);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pathname = router.pathname;
  useAxiosInterceptor();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const autoLogin = async () => {
      if (!getStorageItem('token', '') || user.isLogin) return;

      try {
        const data = await getAuthUser();
        dispatch(loginUser(data));
      } catch (err) {
        return;
      }
    };

    autoLogin();
  }, []);

  return (
    <LayoutContainer>
      {state.show && <FlashAlert />}
      <NavigationHeader />
      {children}
    </LayoutContainer>
  );
};

export default Layout;

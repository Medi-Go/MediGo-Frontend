import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStorageItem } from '../../utils/storage';
import { loginUser, selectUser } from '../../store/slices/user';
import { useAxiosInterceptor } from '../../hooks/useAxiosAuthInterceptor';
import { NavigationHeader } from '../index';
import { getAuthUser } from '../../apis/user';
import { LayoutContainer } from './style';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pathname = router.pathname;
  useAxiosInterceptor();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const autoLogin = async () => {
      if (!getStorageItem('token', '') || user.isLogin) return;

      try {
        const data = await getAuthUser();
        dispatch(loginUser(data));
      } catch (err) {
        console.log(err);
        return;
      }
    };

    autoLogin();
  }, [pathname]);

  return (
    <LayoutContainer>
      {/* {state.show && <FlashAlert />} */}
      <NavigationHeader />
      {children}
    </LayoutContainer>
  );
};

export default Layout;

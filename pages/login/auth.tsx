import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { login } from '../../apis/user';

const Auth = () => {
  const router = useRouter();
  const userId = router.query.id;

  const loginRequest = async () => {
    try {
      const data = await login(userId);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      // router.push('/main');
    }
  };

  useEffect(() => {
    userId && loginRequest();
  }, [userId]);

  return <div>auth page</div>;
};

export default Auth;

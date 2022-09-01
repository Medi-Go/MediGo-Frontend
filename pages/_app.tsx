import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/reset.css';
import wrapper from '../store/index';
import { Layout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);

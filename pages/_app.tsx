import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/reset.css';
import Navbar from '../components/Navbar/Navbar';
import wrapper from '../store/index';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Component {...pageProps} />
      <Navbar />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);

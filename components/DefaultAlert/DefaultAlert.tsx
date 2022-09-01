import { AlertTitle } from '@mui/material';
import { CustomAlert } from './style';

interface Props {
  variant?: 'outlined' | 'filled';
  severity?: 'error' | 'warning' | 'info' | 'success';
  title: string;
  content?: string;
}

const DefaultAlert = ({
  title,
  content,
  variant = 'filled',
  severity = 'info',
}: Props) => {
  return (
    <CustomAlert variant={variant} severity={severity}>
      <AlertTitle sx={{ color: '#fff' }}>{title}</AlertTitle>
      {content}
    </CustomAlert>
  );
};

export default DefaultAlert;

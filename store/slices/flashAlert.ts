import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  variant?: 'outlined' | 'filled';
  severity?: 'error' | 'warning' | 'info' | 'success';
  title: string;
  content?: string;
  show?: boolean;
}

const initialState: AlertState = {
  variant: 'filled',
  severity: 'info',
  title: '',
  content: '',
  show: false,
};

export const flashAlertSlice = createSlice({
  name: 'flashAlert',
  initialState,
  reducers: {
    openAlert: (state: AlertState, actions: PayloadAction<AlertState>) => {
      const { variant, severity, title, content } = actions.payload;

      state.variant = variant;
      state.severity = severity;
      state.title = title;
      state.content = content;
      state.show = true;
    },
    closeAlert: (state: AlertState) => {
      state.show = false;
    },
  },
});

export const selectFlashAlert = (state: RootState) => state.flashAlert;

export const { openAlert, closeAlert } = flashAlertSlice.actions;

export default flashAlertSlice.reducer;

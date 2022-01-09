import { createSlice } from '@reduxjs/toolkit';
import { IMessage } from '../../types';
import { DEFAULT_MESSAGE_VALS } from '../constants';



export const messageSlice = createSlice({
  name: 'message',
  initialState: DEFAULT_MESSAGE_VALS,
  reducers: {
    showMessage: (state, { payload }: { payload: IMessage }) => {
      const { content = '', options } = payload;
      const { snackbar = {}, alert = {}, link = {} } = options || {}
      state.content = content;
      state.options = {
        // @ts-ignore
        snackbar: { ...state.options.snackbar, ...snackbar, open: true },
        // @ts-ignore
        alert: { ...state.options.alert, ...alert },
        // @ts-ignore
        link,
      }
    },
    hideMessage: (state) => {
      state.options.snackbar.open = false
    }
  },
});


export default messageSlice;
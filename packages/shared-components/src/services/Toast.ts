import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type IParams = {
  content: string;
  options?: ToastOptions;
};

export const errorToast = ({ content, options = {} }: IParams) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: 'error',
    ...options
  });
};

export const successToast = ({ content, options = {} }: IParams) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: 'success',
    ...options
  });
};

export const infoToast = ({ content, options = {} }: IParams) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: 'info',
    ...options
  });
};

export { toast };

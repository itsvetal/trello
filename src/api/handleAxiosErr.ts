import axios from 'axios';
import { toast } from 'react-toastify';

export const handleAxiosError = (err: unknown, toastId: string | number): void => {
  if (axios.isAxiosError(err)) {
    if (err.response) {
      toast.update(toastId, {
        render: `Error with status: ${err.response.status}`,
        type: 'error',
        isLoading: false,
        autoClose: 2000,
      });
    } else if (err.request) {
      toast.update(toastId, {
        render: `Error with request: ${err.request}`,
        type: 'error',
        isLoading: false,
        autoClose: 2000,
      });
    }
  }
  toast.update(toastId, {
    render: `Unexpected error ${err}`,
    type: 'error',
    isLoading: false,
    autoClose: 2000,
  });
};

import axios from 'axios';
import { api } from '../common/constants';
import { finishProgress, startProgress, updateProgress } from '../utils/progressBar';

const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 123', // до цього ми ще повернемося якось потім
  },
});

instance.interceptors.request.use((config) => {
  startProgress();
  return config;
});

instance.interceptors.response.use(
  (res) => {
    finishProgress();
    return res.data;
  },
  (err) => {
    finishProgress();
    return Promise.reject(err);
  }
);

instance.defaults.onDownloadProgress = (progressEvent): void => {
  if (progressEvent.lengthComputable) {
    const total = progressEvent.total || 0;
    const progress = Math.floor((progressEvent.loaded / total) * 100);
    updateProgress(progress);
  } else {
    const progressBar = document.querySelector('#progress-bar');
    if (progressBar && progressBar instanceof HTMLDivElement) {
      progressBar.classList.add('indeterminate');
    }
  }
};

export default instance;

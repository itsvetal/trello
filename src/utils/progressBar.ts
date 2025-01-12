export const startProgress = (): void => {
  const progressBarContainer = document.querySelector('#progress-bar-container');
  const progressBar = document.querySelector('#progress-bar');
  if (
    progressBarContainer &&
    progressBarContainer instanceof HTMLDivElement &&
    progressBar &&
    progressBar instanceof HTMLDivElement
  ) {
    progressBarContainer.style.display = 'block';
    progressBar.style.width = '0%';
  }
};

export const updateProgress = (progress: number): void => {
  const progressBar = document.querySelector('#progress-bar');
  if (progressBar && progressBar instanceof HTMLDivElement) {
    progressBar.style.width = `${progress}%`;
  }
};

export const finishProgress = (): void => {
  const progressBarContainer = document.querySelector('#progress-bar-container');
  const progressBar = document.querySelector('#progress-bar');
  if (
    progressBarContainer &&
    progressBarContainer instanceof HTMLDivElement &&
    progressBar &&
    progressBar instanceof HTMLDivElement
  ) {
    setTimeout(() => {
      progressBar.classList.remove('indeterminate');
      progressBar.style.width = '100%';
      setTimeout(() => {
        progressBarContainer.style.display = 'none';
      }, 1000);
    }, 1000);
  }
};

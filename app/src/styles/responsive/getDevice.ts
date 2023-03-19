import { useMediaQuery } from 'react-responsive';

export const getDevice = (): Device => {
  if (useMediaQuery({ minWidth: 768 })) {
    return 'desktop';
  }
  return 'mobile';
};

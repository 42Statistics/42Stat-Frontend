import { Clickable } from '@/components/common';
import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
import { useNavigate } from 'react-router-dom';

export const AppLogoTitleButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <Clickable onClick={handleClick} element={<AppLogoTitle size="sm" />} />
  );
};

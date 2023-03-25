import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common';

export const AppLogoTitleButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return <Button onClick={handleClick} element={<AppLogoTitle size="sm" />} />;
};

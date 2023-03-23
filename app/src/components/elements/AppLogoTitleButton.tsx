import { AppLogoTitle } from '@/assets/AppLogoTitle';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const AppLogoTitleButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return <Button onClick={handleClick} element={<AppLogoTitle size="sm" />} />;
};

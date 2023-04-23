import { Avatar, Clickable, HStack } from '@/components/common';
import { userAtom } from '@/utils/atoms/userAtom';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { MobileNavItem } from './MobileNavItem';
import { useNavMenu } from './hooks/useNavMenu';

export const MobileNavBar = () => {
  const { options } = useNavMenu();
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/profile/me');
  };

  return (
    <MobileNavBarLayout>
      <HStack as="ul" w="100%" justify="space-around">
        {options.map((option) => (
          <MobileNavItem key={option.menu} option={option} />
        ))}
        <Clickable
          element={<Avatar size="2rem" imgUrl={user.imgUrl} />}
          onClick={handleClick}
        />
      </HStack>
    </MobileNavBarLayout>
  );
};

const MobileNavBarLayout = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  padding: 1.4rem 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;

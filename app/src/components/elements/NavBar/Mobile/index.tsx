import { HStack } from '@/styles/components';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { useNavBar } from '../hooks/useNavBar';
import { MobileNavItem } from './MobileNavItem';

// TODO: User Profile 맨 오른쪽에 추가
export const MobileNavBar = () => {
  const { options } = useNavBar();
  const location = useLocation();

  return (
    <MobileNavBarLayout>
      <HStack as="ul" w="100%" css={{ justifyContent: 'space-around' }}>
        {options.map((option) => (
          <MobileNavItem
            key={option.menu}
            option={option}
            location={location}
          />
        ))}
      </HStack>
    </MobileNavBarLayout>
  );
};

const MobileNavBarLayout = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1.4rem 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;

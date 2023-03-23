import { HStack } from '@/styles/components';
import styled from '@emotion/styled';
import { useNavMenu } from '../hooks/useNavMenu';
import { MobileNavItem } from './MobileNavItem';

// TODO: User Profile 맨 오른쪽에 추가
export const MobileNavBar = () => {
  const { options } = useNavMenu();

  return (
    <MobileNavBarLayout>
      <HStack as="ul" w="100%" css={{ justifyContent: 'space-around' }}>
        {options.map((option) => (
          <MobileNavItem key={option.menu} option={option} />
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

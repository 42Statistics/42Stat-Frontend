import { Avatar, HStack } from '@/components/common';
import { userAtom } from '@/utils/atoms/userAtom';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';
import { useNavMenu } from './hooks/useNavMenu';
import { MobileNavItem } from './MobileNavItem';

export const MobileNavBar = () => {
  const { options } = useNavMenu();
  const user = useAtomValue(userAtom);

  return (
    <MobileNavBarLayout>
      <HStack as="ul" w="100%" css={{ justifyContent: 'space-around' }}>
        {options.map((option) => (
          <MobileNavItem key={option.menu} option={option} />
        ))}
        <Avatar size="2rem" imgUrl={user.imageUrl} />
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

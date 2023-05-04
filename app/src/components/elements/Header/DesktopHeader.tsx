import { HStack, Spacer } from '@/components/common';
import { AboveTabletUserSearchBar } from '@/components/elements/UserSearchBar/AboveTabletUserSearchBar';
import styled from '@emotion/styled';

export const DesktopHeader = () => {
  return (
    <DesktopHeaderLayout>
      <HStack w="100%" h="100%" align="center">
        <AboveTabletUserSearchBar />
        <Spacer />
      </HStack>
    </DesktopHeaderLayout>
  );
};

const DesktopHeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 24rem;
  width: 100%;
  height: 8rem;
  z-index: 100;
`;

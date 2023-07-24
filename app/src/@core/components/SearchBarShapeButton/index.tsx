import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { CaptionText, Clickable, HStack, Spacer, Text } from '@shared/ui-kit';
import { useSetAtom } from 'jotai';

export const SearchBarShapeButton = () => {
  const theme = useTheme();
  const setIsSpotlightOpen = useSetAtom(isSpotlightOpenAtom);

  const openSpotlight = () => {
    setIsSpotlightOpen(true);
  };

  return (
    <Layout onClick={openSpotlight}>
      <HStack w="100%" justify="start" spacing="1.6rem">
        <MdSearch width={18} height={18} fill={theme.colors.mono.gray300} />
        <Text color={theme.colors.mono.gray300}>Search</Text>
        <Spacer />
        <CaptionText color={theme.colors.mono.gray300}>⌘ K</CaptionText>
      </HStack>
    </Layout>
  );
};

const Layout = styled(Clickable)`
  width: 100%;
  max-width: 24rem;
  padding: 1rem 1.6rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.mono.gray50};
  background-color: ${({ theme }) => theme.colors.mono.white};
  transition: all 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.mono.gray100};
  }
`;

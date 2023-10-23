import { useAtomValue } from 'jotai';

import styled from '@emotion/styled';
import { paletteAtom } from '@shared/atoms/paletteAtom';
import { pickColorFromString } from '@shared/utils/pickColorFromString';

export const AvatarInitials = ({ width, name }: AvatarInitialsProps) => {
  const palette = useAtomValue(paletteAtom);

  const brightness = palette === 'light' ? 0 : 128;
  const range = 128;

  const randomColor = pickColorFromString(name, brightness, range);

  return (
    <Layout w={width} h={width} bg={randomColor}>
      {name.slice(0, 2).toUpperCase()}
    </Layout>
  );
};

type AvatarInitialsProps = {
  width: string;
  name: string;
};

type LayoutProps = {
  w: string;
  h: string;
  bg: string;
};

const Layout = styled.div<LayoutProps>`
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  color: ${({ theme }) => theme.colors.mono.white};
  font-size: ${({ theme }) => theme.fonts.size.caption};
  display: flex;
  justify-content: center;
  align-items: center;
`;

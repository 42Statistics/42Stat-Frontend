import { useAtomValue } from 'jotai';

import styled from '@emotion/styled';
import { paletteAtom } from '@shared/atoms/paletteAtom';
import { pickColorFromString } from '@shared/utils/pickColorFromString';
import type { AvatarSize } from '@shared/ui-kit/Avatar';

type AvatarInitialsProps = {
  size: AvatarSize;
  width: string;
  name: string;
};

export const AvatarInitials = ({ size, width, name }: AvatarInitialsProps) => {
  const palette = useAtomValue(paletteAtom);

  const brightness = palette === 'light' ? 0 : 128;
  const range = 128;

  const randomColor = pickColorFromString(name, brightness, range);
  const fontSize = getFontSize(size);

  return (
    <Layout w={width} h={width} bg={randomColor} fontSize={fontSize}>
      {name.slice(0, 2).toUpperCase()}
    </Layout>
  );
};

type LayoutProps = {
  w: string;
  h: string;
  bg: string;
  fontSize: string;
};

const Layout = styled.div<LayoutProps>`
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.colors.mono.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getFontSize = (size: AvatarSize) => {
  switch (size) {
    case 'xs':
      return '1rem';
    case 'sm':
      return '1.2rem';
    case 'md':
      return '1.6rem';
    case 'lg':
      return '2rem';
    case 'xl':
      return '3rem';
    case '2xl':
      return '4rem';
    default:
      return '1.6rem';
  }
};

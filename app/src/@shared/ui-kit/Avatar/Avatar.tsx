import styled from '@emotion/styled';
import { useState } from 'react';

import default_avatar from '@shared/assets/avatar/default.png';
import marvin from '@shared/assets/avatar/marvin.jpeg';
import { Image } from '@shared/ui-kit/Image';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type AvatarProps = {
  size?: AvatarSize;
  src?: string | null;
  alt?: string;
  badge?: React.ReactNode;
};

export const Avatar = ({ size = 'md', src, alt = '', badge }: AvatarProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (src == null) {
    src = marvin;
  }

  const width = getWidth(size);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = marvin;
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading ? (
        <Cover src={default_avatar} style={{ width, height: width }} />
      ) : null}
      <StyledAvatar
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        src={src}
        alt={alt}
        style={{ width, height: width }}
      />
      {badge != null ? (
        <div style={{ position: 'absolute', top: '-10%', right: '-10%' }}>
          {badge}
        </div>
      ) : null}
    </div>
  );
};

const Cover = styled(Image)`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.mono.gray300};
`;

const StyledAvatar = styled(Image)`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.circle};
`;

const getWidth = (size: AvatarSize) => {
  switch (size) {
    case 'xs':
      return '2rem';
    case 'sm':
      return '2.4rem';
    case 'md':
      return '3.2rem';
    case 'lg':
      return '4rem';
    case 'xl':
      return '6rem';
    case '2xl':
      return '8rem';
    default:
      return '3.2rem';
  }
};

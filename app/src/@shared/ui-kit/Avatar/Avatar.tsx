import styled from '@emotion/styled';
import default_avatar from '@shared/assets/avatar/default.png';
import marvin from '@shared/assets/avatar/marvin.jpeg';
import { useState } from 'react';
import { Image } from '../Image';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type AvatarProps = {
  size?: AvatarSize;
  src?: string | null;
};

export const Avatar = ({ size = 'md', src }: AvatarProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (src == null) {
    src = marvin;
  }

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
      default:
        return '3.2rem';
    }
  };
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
        style={{ width, height: width }}
      />
    </div>
  );
};

const Cover = styled(Image)`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.mono.gray100};
`;

const StyledAvatar = styled(Image)`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.circle};
`;
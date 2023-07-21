import styled from '@emotion/styled';
import { useState } from 'react';
import { Image } from '../Image';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type AvatarProps = {
  size?: AvatarSize;
  src?: string | null;
};

export const Avatar = ({ size = 'md', src }: AvatarProps) => {
  const DEFAULT_AVATAR = '/default-avatar.png';
  const [isLoading, setIsLoading] = useState(true);

  const computeWidth = (size: AvatarSize) => {
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

  const width = computeWidth(size);

  if (src == null) {
    src = DEFAULT_AVATAR;
  }

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_AVATAR;
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading ? <Cover style={{ width, height: width }} /> : null}
      <StyledAvatar
        onLoad={handleLoad}
        onError={handleError}
        src={src}
        style={{ width, height: width }}
      />
    </div>
  );
};

const Cover = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.mono.gray100};
`;

const StyledAvatar = styled(Image)`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.circle};
`;

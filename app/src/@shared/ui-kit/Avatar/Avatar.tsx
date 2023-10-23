import styled from '@emotion/styled';
import { useState } from 'react';

import marvin from '@shared/assets/avatar/marvin.jpeg';
import { AvatarInitials } from '@shared/ui-kit/Avatar/AvatarInitials';
import { Image } from '@shared/ui-kit/Image';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type AvatarProps = {
  size?: AvatarSize;
  src?: string | null | undefined;
  alt?: string;
  badge?: React.ReactNode;
  name?: string | undefined;
};

export const Avatar = ({
  size = 'md',
  src,
  alt = '',
  badge,
  name,
}: AvatarProps) => {
  const [image, setImage] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const width = getWidth(size);

  const handleError = () => {
    setImage(null);
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {name && !image && (isLoading || isError) ? (
        <AvatarInitials width={width} name={name} />
      ) : (
        <StyledAvatar
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          src={image || marvin}
          alt={alt}
          style={{ width, height: width }}
        />
      )}
      {badge != null ? (
        <div style={{ position: 'absolute', top: '-10%', right: '-10%' }}>
          {badge}
        </div>
      ) : null}
    </div>
  );
};

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

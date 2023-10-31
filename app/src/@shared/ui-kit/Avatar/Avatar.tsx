import { useState } from 'react';

import styled from '@emotion/styled';
import { AvatarInitials } from '@shared/ui-kit/Avatar/AvatarInitials';
import { Image } from '@shared/ui-kit/Image';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type AvatarProps = {
  size?: AvatarSize;
  src?: string | null | undefined;
  alt?: string;
  badge?: React.ReactNode;
  name: string;
};

export const Avatar = ({
  size = 'md',
  src,
  alt = '',
  badge,
  name,
}: AvatarProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const width = getWidth(size);

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {src != null && !isError ? (
        <>
          {isLoading && (
            <AvatarInitials size={size} width={width} name={name} isAbsolute />
          )}
          <StyledAvatar
            onLoad={() => setIsLoading(false)}
            onError={handleError}
            src={src}
            alt={alt}
            style={{ width, height: width }}
          />
        </>
      ) : (
        <AvatarInitials size={size} width={width} name={name} />
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

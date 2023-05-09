import styled from '@emotion/styled';
import { useState } from 'react';

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: string;
  imgUrl?: string | null;
};

export const Avatar = ({ size, imgUrl, ...remainProps }: AvatarProps) => {
  const DEFAULT_AVATAR = '/default-avatar.png';
  const [isLoaded, setIsLoaded] = useState(false);

  if (imgUrl == null) imgUrl = DEFAULT_AVATAR;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    imgUrl = DEFAULT_AVATAR;
  };

  return (
    <div css={{ position: 'relative' }}>
      {!isLoaded && <Cover size={size} />}
      <StyledAvatar
        size={size}
        onLoad={handleLoad}
        onError={handleError}
        src={imgUrl}
        css={{
          opacity: isLoaded ? 1 : 0,
        }}
        {...remainProps}
      />
    </div>
  );
};

const Cover = styled.div<{ size?: string; color?: string }>`
  position: absolute;
  width: ${({ size = '2.4rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  border-radius: 50%;
  background-color: ${({ theme, color = theme.colors.mono.gray100 }) => color};
`;

const StyledAvatar = styled.img<{ size?: string }>`
  width: ${({ size = '2.4rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  object-fit: cover;
  border-radius: 50%;
`;

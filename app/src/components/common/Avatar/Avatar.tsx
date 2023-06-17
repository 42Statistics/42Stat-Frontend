import styled from '@emotion/styled';
import { useState } from 'react';
import { Image } from '../Image';

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: string;
  imgUrl?: string | null;
};

export const Avatar = ({ size, imgUrl, ...remainProps }: AvatarProps) => {
  const DEFAULT_AVATAR = '/default-avatar.png';
  const [isLoading, setIsLoading] = useState(true);

  if (imgUrl == null) imgUrl = DEFAULT_AVATAR;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_AVATAR;
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <Cover size={size} />}
      <StyledAvatar
        size={size}
        onLoad={handleLoad}
        onError={handleError}
        src={imgUrl}
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

const StyledAvatar = styled(Image)<{ size?: string }>`
  width: ${({ size = '2.4rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  object-fit: cover;
  border-radius: 50%;
`;

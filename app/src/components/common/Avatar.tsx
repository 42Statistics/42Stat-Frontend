import styled from '@emotion/styled';

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: string;
  src?: string | null;
};

const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = '/default-avatar.png';
};

export const Avatar = ({ size, src, ...remainProps }: AvatarProps) => {
  if (src == null) src = '/default-avatar.png';
  return (
    <div>
      <StyledAvatar
        size={size}
        onError={handleError}
        src={src}
        {...remainProps}
      />
    </div>
  );
};

type StyledAvatarProps = {
  size?: string;
};

const StyledAvatar = styled.img<StyledAvatarProps>`
  width: ${({ size = '2.4rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  object-fit: cover;
  border-radius: 50%;
`;

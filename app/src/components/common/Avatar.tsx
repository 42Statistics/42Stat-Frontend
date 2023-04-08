import styled from '@emotion/styled';

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: string;
};

const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = '/default-avatar.png';
};

export const Avatar = ({ size, ...propsExceptSize }: AvatarProps) => {
  return (
    <div>
      <StyledAvatar size={size} onError={handleError} {...propsExceptSize} />
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

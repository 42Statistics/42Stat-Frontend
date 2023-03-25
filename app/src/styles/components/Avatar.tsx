import styled from '@emotion/styled';
import { ImgHTMLAttributes } from 'react';

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: string;
};

export const Avatar = ({ size, ...propsExceptSize }: AvatarProps) => {
  return (
    <div>
      <StyledAvatar size={size} {...propsExceptSize} />
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

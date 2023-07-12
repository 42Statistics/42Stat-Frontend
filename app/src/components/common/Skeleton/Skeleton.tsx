import styled from '@emotion/styled';
import { SkeletonAnimation } from '@styles/custom/SkeletonAnimation';

type SkeletonProps = Partial<{
  w: string;
  h: string;
  radius: string;
}>;

export const Skeleton = styled(SkeletonAnimation)<SkeletonProps>`
  width: ${({ w = '100%' }) => w};
  height: ${({ h = '100%' }) => h};
  border-radius: ${({ theme, radius = theme.radius.md }) => radius};
`;

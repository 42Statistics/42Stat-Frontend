import { css } from '@emotion/react';
import styled from '@emotion/styled';

const skeletonBackgroundAnimation = css`
  background: #eeeeee;
  background: linear-gradient(110deg, #eeeeee 8%, #f5f5f5 18%, #eeeeee 33%);
  background-size: 200% 100%;
  animation: 1.4s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.4rem;
  ${skeletonBackgroundAnimation}
`;

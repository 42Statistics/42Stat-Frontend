import styled from '@emotion/styled';

export const SkeletonAnimation = styled.div`
  background: #f2f2f2;
  background: linear-gradient(110deg, #f2f2f2 8%, #fbfbfb 18%, #f2f2f2 33%);
  background-size: 200% 100%;
  animation: 1.4s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

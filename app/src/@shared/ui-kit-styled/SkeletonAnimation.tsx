import styled from '@emotion/styled';

export const SkeletonAnimation = styled.div`
  background: #ffffff;
  background: linear-gradient(110deg, #ffffff 8%, #f5f5f5 18%, #ffffff 33%);
  background-size: 200% 100%;
  animation: 1.4s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

import styled from '@emotion/styled';

export const SkeletonAnimation = styled.div`
  background-color: ${({ theme }) => theme.colors.background.skeleton.default};
  background: ${({ theme }) => theme.colors.background.skeleton.gradient};
  background-size: 200% 100%;
  animation: 1.4s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

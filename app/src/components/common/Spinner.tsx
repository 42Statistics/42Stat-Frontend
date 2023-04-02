import styled from '@emotion/styled';

type SpinnerProps = Partial<{
  size: string;
  color: string;
  thickness: string;
}>;

export const Spinner = styled.div<SpinnerProps>`
  width: ${({ size = '2.4rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  border: ${({ thickness = '0.2rem' }) => thickness} solid transparent;
  border-top-color: ${({ theme }) => theme.colors.mono.black};
  border-left-color: ${({ theme }) => theme.colors.mono.black};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(720deg);
    }
  }
`;

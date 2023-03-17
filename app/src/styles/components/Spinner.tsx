import styled from '@emotion/styled';

type SpinnerProps = Partial<{
  size: string;
  color: string;
  thickness: string;
}>;

export const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${({ size = '24px' }) => size};
  height: ${({ size = '24px' }) => size};
  border: ${({ thickness = '2px' }) => thickness}px solid transparent;
  border-top-color: black;
  border-left-color: black;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(720deg);
    }
  }
`;

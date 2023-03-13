import styled from '@emotion/styled';

type SpinnerProps = Partial<{
  size: number;
  color: string;
  thickness: number;
}>;

export const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;
  border: ${({ thickness = 2 }) => thickness}px solid transparent;
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

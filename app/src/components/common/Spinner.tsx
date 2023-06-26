import styled from '@emotion/styled';
import { Center } from './Stack';

type SpinnerProps = Partial<{
  size: string;
  color: string;
  thickness: string;
}>;

// ApexChart의 100% 문제를 고치기 위해 Center를 빼서 어쩔 수 없이 해당 구조로 만듦
export const Spinner = () => {
  return (
    <Center w="100%" h="100%">
      <SpinnerInner />
    </Center>
  );
};

const SpinnerInner = styled.div<SpinnerProps>`
  width: ${({ size = '2.4rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  border: ${({ thickness = '0.2rem' }) => thickness} solid transparent;
  border-top-color: ${({ theme }) => theme.colors.mono.black};
  border-left-color: ${({ theme }) => theme.colors.mono.black};
  border-radius: ${({ theme }) => theme.radius.circle};
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(720deg);
    }
  }
`;

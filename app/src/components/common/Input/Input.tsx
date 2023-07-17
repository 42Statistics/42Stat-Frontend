import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { HStack } from '../Stack';
import { Writable } from './Writable';

type InputProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  ({ left, right, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Layout>
        <HStack spacing="2rem">
          {left}
          <Writable {...props} ref={ref} />
          {right}
        </HStack>
      </Layout>
    );
  },
);

Input.displayName = 'Input';

const Layout = styled.div`
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.2s;
  background-color: #f2f2f2;
`;

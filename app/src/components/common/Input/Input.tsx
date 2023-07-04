import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { HStack } from '../Stack';
import { Writable } from './Writable';

type InputProps = {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (
    { leftElement, rightElement, ...props }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Layout>
        <HStack spacing="2rem">
          {leftElement != null && leftElement}
          <Writable {...props} ref={ref} />
          {rightElement != null && rightElement}
        </HStack>
      </Layout>
    );
  },
);

Input.displayName = 'Input';

const Layout = styled.div`
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.5s;

  box-shadow: 8px 8px 10px #e0e0e0, -8px -8px 10px #ffffff;

  &:hover {
    box-shadow: 8px 8px 10px #cccccc, -8px -8px 10px #ffffff;
  }
`;

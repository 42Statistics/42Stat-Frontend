import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { Writable } from './Writable';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Layout>
        <Writable {...props} ref={ref} />
      </Layout>
    );
  },
);

Input.displayName = 'Input';

const Layout = styled.div`
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray50};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray100};
  }
`;

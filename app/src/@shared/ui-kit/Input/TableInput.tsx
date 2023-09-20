import styled from '@emotion/styled';
import { Writable } from '@shared/ui-kit';
import { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const TableInput = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Layout>
        <Writable {...props} ref={ref} />
      </Layout>
    );
  },
);

TableInput.displayName = 'Input';

const Layout = styled.div`
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;

import styled from '@emotion/styled';
import type { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';

export const CustomDialogFooter = ({
  children,
}: PropsWithReactNodeChildren) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-end-end-radius: ${({ theme }) => theme.radius.sm};
  border-end-start-radius: ${({ theme }) => theme.radius.sm};
  padding: 2rem 3rem;
  gap: 1.4rem;
`;

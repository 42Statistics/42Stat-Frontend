import styled from '@emotion/styled';

type CustomDialogFooterProps = {
  children: React.ReactNode;
};

export const CustomDialogFooter = ({ children }: CustomDialogFooterProps) => {
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

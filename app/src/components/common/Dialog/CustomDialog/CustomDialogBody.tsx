import { Text } from '@components/common/Text';
import styled from '@emotion/styled';

type CustomDialogBodyProps = {
  children: React.ReactNode;
};

export const CustomDialogBody = ({ children }: CustomDialogBodyProps) => {
  return (
    <Layout>
      <Text>{children}</Text>
    </Layout>
  );
};

const Layout = styled.div`
  padding: 1rem 3rem;
`;

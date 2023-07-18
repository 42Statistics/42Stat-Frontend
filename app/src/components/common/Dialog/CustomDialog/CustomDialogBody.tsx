import type { PropsWithStringChildren } from '@/types/PropsWithChildren';
import { Text } from '@components/common/Text';
import styled from '@emotion/styled';

export const CustomDialogBody = ({ children }: PropsWithStringChildren) => {
  return (
    <Layout>
      <Text>{children}</Text>
    </Layout>
  );
};

const Layout = styled.div`
  padding: 1rem 3rem;
`;

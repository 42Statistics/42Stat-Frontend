import styled from '@emotion/styled';

import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Text } from '@shared/ui-kit/Text';

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

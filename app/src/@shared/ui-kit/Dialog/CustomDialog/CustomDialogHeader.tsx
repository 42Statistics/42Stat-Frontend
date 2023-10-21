import styled from '@emotion/styled';

import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { H2BoldText } from '@shared/ui-kit/Text';

export const CustomDialogHeader = ({ children }: PropsWithStringChildren) => {
  return (
    <Layout>
      <H2BoldText>{children}</H2BoldText>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
`;

import { H2BoldText } from '@components/common/Text';
import styled from '@emotion/styled';
import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';

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

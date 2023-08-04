import styled from '@emotion/styled';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

export const TooltipContainer = ({
  children,
}: PropsWithReactElementChildren) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  position: relative;

  &:hover .tooltip {
    display: block;
  }
`;

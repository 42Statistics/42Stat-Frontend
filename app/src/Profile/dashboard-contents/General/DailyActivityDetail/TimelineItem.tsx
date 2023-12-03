import styled from '@emotion/styled';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

type TimelineItemProps = {
  icon: JSX.Element;
  color: string;
} & PropsWithReactElementChildren;

export const TimelineItem = ({ icon, color, children }: TimelineItemProps) => {
  return (
    <Layout lineColor={color}>
      <IconLayout backgroundColor={color}>{icon}</IconLayout>
      {children}
    </Layout>
  );
};

type IconLayoutProps = {
  backgroundColor: string;
};

const IconLayout = styled.div<IconLayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 1;
  border: 0.1rem solid ${({ theme }) => theme.colors.mono.white};
`;

type LayoutProps = {
  lineColor: string;
};

const Layout = styled.div<LayoutProps>`
  position: relative;
  display: flex;
  gap: 1.6rem;
  padding: 1rem 0;

  ::before {
    content: '';
    position: absolute;
    left: 1.4rem;
    width: 0.2rem;
    height: 100%;
    background-color: ${({ lineColor }) => lineColor};
  }
`;

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import {
  Body1MediumText,
  CaptionText,
  Center,
  HStack,
  Scroll,
  VStack,
} from '@shared/ui-kit';

type DashboardContentType = 'Default' | 'ApexCharts' | 'Scrollable';

export type DashboardContentProps = PropsWithReactElementChildren<{
  title?: string;
  description?: string;
  titleRight?: React.ReactNode;
  type?: DashboardContentType;
}>;

export const DashboardContent = ({
  title,
  description,
  titleRight,
  children,
  type = 'Default',
}: DashboardContentProps) => {
  const theme = useTheme();

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start" style={{ marginLeft: '1rem' }}>
          <HStack spacing="0.6rem" wrap="wrap">
            {title ? <Body1MediumText>{title}</Body1MediumText> : null}
            {titleRight ? titleRight : null}
          </HStack>
          {description ? (
            <CaptionText color={theme.colors.mono.gray500}>
              {description}
            </CaptionText>
          ) : null}
          {title && !description ? (
            <Body1MediumText preventSelect>&nbsp;</Body1MediumText>
          ) : null}
        </VStack>
        {type === 'Default' ? <Center>{children}</Center> : null}
        {type === 'ApexCharts' ? (
          <ApexChartsContainer>{children}</ApexChartsContainer>
        ) : null}
        {type === 'Scrollable' ? (
          <ScrollableContainer>{children}</ScrollableContainer>
        ) : null}
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
`;

const ScrollableContainer = styled(Scroll)`
  width: 100%;
  padding: 0 1rem;
`;

/**
 * about slow chart resizing issue,
 * @see https://github.com/recharts/recharts/issues/1767#issuecomment-598607012
 */

const ApexChartsContainer = ({ children }: PropsWithReactElementChildren) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

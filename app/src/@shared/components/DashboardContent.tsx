import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { Body1MediumText, CaptionText, Center, VStack } from '@shared/ui-kit';

export type DashboardContentProps = PropsWithReactElementChildren<{
  title?: string;
  description?: string;
  isApexChart?: boolean;
}>;

export const DashboardContent = ({
  title,
  description,
  children,
  isApexChart = false,
}: DashboardContentProps) => {
  const theme = useTheme();

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start" style={{ marginLeft: '1rem' }}>
          {title ? <Body1MediumText>{title}</Body1MediumText> : null}
          {description ? (
            <CaptionText color={theme.colors.mono.gray300}>
              {description}
            </CaptionText>
          ) : null}
        </VStack>
        {!isApexChart ? (
          <Center>{children}</Center>
        ) : (
          <ApexChartsContainer>{children}</ApexChartsContainer>
        )}
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
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

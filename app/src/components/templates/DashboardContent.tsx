import { CaptionText, Center, H3BoldText, VStack } from '@components/common';
import styled from '@emotion/styled';

export type DashboardContentProps = React.PropsWithChildren<{
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
  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start">
          {title && <H3BoldText>{title}</H3BoldText>}
          {description && <CaptionText>{description}</CaptionText>}
        </VStack>
        {!isApexChart ? (
          <Center>{children}</Center>
        ) : (
          <div style={{ width: '100%', height: '100%' }}>{children}</div> // ApexChart의 부모 요소가 Flex인 경우 width: 100%가 적용되지 않는 버그
        )}
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

import { CaptionText, Center, H3MediumText, VStack } from '@components/common';
import styled from '@emotion/styled';

export type DashboardContentProps = React.PropsWithChildren & {
  title?: string;
  description?: string;
  isApexChart?: boolean;
};

export const DashboardContent = ({
  title,
  description,
  children,
  isApexChart = false,
}: DashboardContentProps) => {
  return (
    <DashboardContentLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start">
          {title && <H3MediumText>{title}</H3MediumText>}
          {description && <CaptionText>{description}</CaptionText>}
        </VStack>
        {!isApexChart ? (
          <Center>{children}</Center>
        ) : (
          <div style={{ width: '100%', height: '100%' }}>{children}</div> // ApexChart의 부모 요소가 Flex인 경우 width: 100%가 적용되지 않는 버그
        )}
      </VStack>
    </DashboardContentLayout>
  );
};

const DashboardContentLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

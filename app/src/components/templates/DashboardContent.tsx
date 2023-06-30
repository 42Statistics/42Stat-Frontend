// FIXME: title이 없는데 description이 있을 수는 없음

import { CaptionText, Center, H3MediumText, VStack } from '@components/common';
import styled from '@emotion/styled';

// Content를 div로 감싸야 하는 이유 : ApexChart의 부모 요소가 Flex인 경우 width: 100%가 적용되지 않음
export type DashboardContentProps = React.PropsWithChildren & {
  title?: string;
  description?: string;
};

export const DashboardContent = ({
  title,
  description,
  children,
}: DashboardContentProps) => {
  return (
    <DashboardContentLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start">
          {title && <H3MediumText>{title}</H3MediumText>}
          {description && <CaptionText>{description}</CaptionText>}
        </VStack>
        <div style={{ width: '100%', height: '100%' }}>
          <Center>{children}</Center>
        </div>
      </VStack>
    </DashboardContentLayout>
  );
};

const DashboardContentLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

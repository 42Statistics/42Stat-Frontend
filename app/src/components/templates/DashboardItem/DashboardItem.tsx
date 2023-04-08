import { VStack } from '@/components/common';
import { DashboardItemProps } from '@/utils/types/Dashboard';
import styled from '@emotion/styled';
import { DashboardItemHeader } from './DashboardItemHeader';

// FIXME: title이 없는데 description이 있을 수는 없음
// Content를 div로 감싸야 하는 이유 : ApexChart의 부모 요소가 Flex인 경우 width: 100%가 적용되지 않음
export const DashboardItem = ({
  title,
  description,
  content: Content,
}: DashboardItemProps) => {
  return (
    <DashboardItemLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        {title && (
          <DashboardItemHeader title={title} description={description} />
        )}
        <div css={{ width: '100%', height: '100%' }}>
          <Content />
        </div>
      </VStack>
    </DashboardItemLayout>
  );
};

const DashboardItemLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

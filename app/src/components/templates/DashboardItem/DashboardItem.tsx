import { Center, VStack } from '@/components/common';
import { DashboardItemProps } from '@/utils/types/Dashboard';
import styled from '@emotion/styled';
import { DashboardItemHeader } from './DashboardItemHeader';

// FIXME: title이 없는데 description이 있을 수는 없음
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
        <Center w="100%" h="100%">
          <Content />
        </Center>
      </VStack>
    </DashboardItemLayout>
  );
};

const DashboardItemLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

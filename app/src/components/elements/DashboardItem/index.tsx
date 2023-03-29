import { Center, Text, VStack } from '@/components/common';
import { DashboardItemInfo } from '@/utils/types/Dashboard';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

// FIXME: title이 없는데 description이 있을 수는 없음

export const DashboardItem = ({
  title,
  description,
  content: Content,
}: DashboardItemInfo) => {
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

type DashboardItemHeaderProps = {
  title?: string;
  description?: string;
};

const DashboardItemHeader = ({
  title,
  description,
}: DashboardItemHeaderProps) => {
  const theme = useTheme();
  return (
    <VStack w="100%" align="start">
      {title && (
        <Text
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.medium}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text fontSize={theme.fonts.size.caption}>{description}</Text>
      )}
    </VStack>
  );
};

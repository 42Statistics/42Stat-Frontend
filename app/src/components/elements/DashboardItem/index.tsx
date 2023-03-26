import { Center, Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

// FIXME: title이 없는데 description이 있을 수는 없음
type DashboardItemProps = {
  title?: string;
  description?: string;
  element: ReactNode;
};

export const DashboardItem = ({
  title,
  description,
  element,
}: DashboardItemProps) => {
  return (
    <DashboardItemLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        {title && (
          <DashboardItemHeader title={title} description={description} />
        )}
        <Center w="100%" h="100%">
          {element}
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

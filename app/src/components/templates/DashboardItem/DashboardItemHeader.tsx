import { Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';

type DashboardItemHeaderProps = {
  title?: string;
  description?: string;
};

export const DashboardItemHeader = ({
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

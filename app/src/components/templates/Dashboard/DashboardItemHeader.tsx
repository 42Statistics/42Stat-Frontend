import { CaptionText, H3MediumText, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';

type DashboardItemHeaderProps = {
  title?: string;
  description?: string;
};

export const DashboardItemHeader = ({
  title,
  description,
}: DashboardItemHeaderProps) => {
  return (
    <VStack w="100%" align="start">
      {title && <H3MediumText>{title}</H3MediumText>}
      {description && <CaptionText>{description}</CaptionText>}
    </VStack>
  );
};

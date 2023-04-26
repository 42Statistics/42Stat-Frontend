import { HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';

type TextDefaultProps = {
  text: string;
};

export const TextDefault = ({ text }: TextDefaultProps) => {
  const theme = useTheme();

  return (
    <HStack h="100%">
      <Text fontSize={theme.fonts.size.h3}>{text}</Text>
    </HStack>
  );
};

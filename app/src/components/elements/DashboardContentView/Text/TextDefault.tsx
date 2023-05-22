import { H3Text, HStack } from '@/components/common';
import { useTheme } from '@emotion/react';

type TextDefaultProps = {
  text: string;
  color?: string;
};

export const TextDefault = ({ text, color }: TextDefaultProps) => {
  const theme = useTheme();
  color = color || theme.colors.mono.black;

  return (
    <HStack h="100%">
      <H3Text color={color}>{text}</H3Text>
    </HStack>
  );
};

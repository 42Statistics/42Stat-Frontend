import { H3Text, HStack } from '@/components/common';

type TextDefaultProps = {
  text: string;
};

export const TextDefault = ({ text }: TextDefaultProps) => {
  return (
    <HStack h="100%">
      <H3Text>{text}</H3Text>
    </HStack>
  );
};

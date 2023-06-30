import { H3Text } from '@components/common';

type TextDefaultProps = {
  text: string;
};

export const TextDefault = ({ text }: TextDefaultProps) => {
  return <H3Text>{text}</H3Text>;
};

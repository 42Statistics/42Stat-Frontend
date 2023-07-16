import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';

type MarkLabelProps = {
  isValidate: boolean;
  finalMark: number;
};

export const MarkLabel = ({ isValidate, finalMark }: MarkLabelProps) => {
  const theme = useTheme();
  const color = isValidate
    ? theme.colors.evaluation.pass
    : theme.colors.evaluation.fail;

  return (
    <HStack>
      {isValidate ? (
        <AiOutlineCheck color={color} />
      ) : (
        <AiOutlineClose color={color} />
      )}
      <Text color={color}>{finalMark}</Text>
    </HStack>
  );
};

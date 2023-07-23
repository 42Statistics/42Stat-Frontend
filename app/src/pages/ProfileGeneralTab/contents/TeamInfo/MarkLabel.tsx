import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { ReactComponent as MdCheck } from '@shared/assets/icon/md-check.svg';
import { ReactComponent as MdClose } from '@shared/assets/icon/md-close.svg';

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
        <MdCheck width={20} height={20} fill={color} />
      ) : (
        <MdClose width={20} height={20} fill={color} />
      )}
      <Text color={color}>{finalMark}</Text>
    </HStack>
  );
};

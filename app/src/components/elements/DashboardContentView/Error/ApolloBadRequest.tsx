import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { MdErrorOutline } from '@react-icons/all-files/md/MdErrorOutline';

export const ApolloBadRequest = ({ msg }: { msg?: string }) => {
  const theme = useTheme();
  return (
    <HStack w="100%" h="100%" spacing="1rem">
      <MdErrorOutline size="20px" fill={theme.colors.semantic.fail} />
      <Text color={theme.colors.mono.gray300}>{msg}</Text>
    </HStack>
  );
};

import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { MdErrorOutline } from '@react-icons/all-files/md/MdErrorOutline';

export type ApolloErrorViewProps = {
  message?: string;
};

export const ApolloErrorView = ({
  message = 'Not Found',
}: ApolloErrorViewProps) => {
  const theme = useTheme();

  return (
    <HStack spacing="1rem">
      <MdErrorOutline size="20px" fill={theme.colors.semantic.error} />
      <Text color={theme.colors.mono.gray300}>{message}</Text>
    </HStack>
  );
};

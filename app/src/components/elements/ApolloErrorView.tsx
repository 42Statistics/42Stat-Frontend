import { ReactComponent as MdErrorOutline } from '@assets/icon/md-error-outline.svg';
import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';

export type ApolloErrorViewProps = {
  message?: string;
};

export const ApolloErrorView = ({
  message = 'Not Found',
}: ApolloErrorViewProps) => {
  const theme = useTheme();

  return (
    <HStack spacing="1rem">
      <MdErrorOutline
        width={20}
        height={20}
        fill={theme.colors.semantic.error}
      />
      <Text color={theme.colors.mono.gray300}>{message}</Text>
    </HStack>
  );
};

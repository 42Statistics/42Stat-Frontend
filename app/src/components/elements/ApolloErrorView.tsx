import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { ReactComponent as MdErrorOutline } from '@shared/assets/icon/md-error-outline.svg';

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

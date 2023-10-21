import { useTheme } from '@emotion/react';

import { ReactComponent as MdErrorOutline } from '@shared/assets/icon/md-error-outline.svg';
import { HStack, Text } from '@shared/ui-kit';

export type ApolloErrorViewProps = {
  message?: string;
};

export const ApolloErrorView = ({
  message = 'Something went wrong',
}: ApolloErrorViewProps) => {
  const theme = useTheme();

  return (
    <HStack spacing="1rem">
      <MdErrorOutline
        width={20}
        height={20}
        fill={theme.colors.semantic.error}
      />
      <Text color={theme.colors.mono.gray500}>{message}</Text>
    </HStack>
  );
};

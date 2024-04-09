import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import space_background from '@shared/assets/space-background.webp';
import { userAtom } from '@shared/atoms/userAtom';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { H2BoldText, Loader, Text, VStack } from '@shared/ui-kit';
import { CustomBox } from '@shared/ui-kit-styled';
import { useIndividualizedMessageQuery } from '@shared/components/Hero/hooks/useIndividualizedMessage';

export const Hero = () => {
  const theme = useTheme();
  const { loading, error, data, message } = useIndividualizedMessageQuery();
  const { login } = useAtomValue(userAtom);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <ApolloErrorView message={error.message} />
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <ApolloNotFoundView />
      </Layout>
    );
  }

  return (
    <Layout>
      <VStack w="100%" h="100%" align="start" spacing="1rem">
        <H2BoldText color={theme.colors.mono.absolute.white}>
          반가워요, {login} 👋
        </H2BoldText>
        <Text color={theme.colors.mono.absolute.white}>{message}</Text>
      </VStack>
    </Layout>
  );
};

const Layout = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 124px;
  color: ${({ theme }) => theme.colors.mono.absolute.white};
  background: ${({ theme }) =>
    `${theme.colors.background.landing.default} url(${space_background})`};
  background-size: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 3rem 4rem;
  user-select: none;
`;

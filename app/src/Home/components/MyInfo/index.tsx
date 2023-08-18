import styled from '@emotion/styled';
import space_background from '@shared/assets/space-background.webp';
import { userAtom } from '@shared/atoms/userAtom';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { Loader, VStack, WhiteH2BoldText, WhiteText } from '@shared/ui-kit';
import { CustomBox } from '@shared/ui-kit-styled';
import { useAtomValue } from 'jotai';
import { useIndividualizedMessageQuery } from './hooks/useIndividualizedMessage';

export const MyInfo = () => {
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
        <WhiteH2BoldText>반가워요, {login} 👋</WhiteH2BoldText>
        <WhiteText>{message}</WhiteText>
      </VStack>
    </Layout>
  );
};

const Layout = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) =>
    `${theme.colors.background.landing} url(${space_background})`};
  background-size: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 3rem 4rem;
  user-select: none;
`;

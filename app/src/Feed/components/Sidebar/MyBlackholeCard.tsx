import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { userAtom } from '@shared/atoms/userAtom';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import {
  H2BoldText,
  Body1MediumText,
  HStack,
  Loader,
  VStack,
} from '@shared/ui-kit';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getBlackholeColorAndText } from '@shared/utils/getBlackholeColorsAndText';

import { GET_PERSONAL_BLACKHOLE } from '@/Feed/queries/GET_PERSONAL_BLACKHOLE';

export const MyBlackholeCard = () => {
  const theme = useTheme();
  const { login } = useAtomValue(userAtom);

  const { loading, error, data } = useQuery(GET_PERSONAL_BLACKHOLE, {
    variables: { login },
  });

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
        <ApolloErrorView />
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

  const { blackholedAt } = data.getPersonalGeneral;
  const daysLeft =
    blackholedAt != null ? getBlackholeDaysLeft(new Date(blackholedAt)) : null;

  const { color, Svg, text } = getBlackholeColorAndText(theme, daysLeft);

  return (
    <Layout>
      <VStack w="100%" h="100%" align="start" spacing="3rem">
        <Body1MediumText>Black Hole Absorption</Body1MediumText>
        <HStack w="100%" h="100%" spacing="1rem">
          {Svg !== null ? <Svg width={24} height={24} stroke={color} /> : null}
          <H2BoldText color={color} style={{ textAlign: 'center' }}>
            {text}
          </H2BoldText>
        </HStack>
      </VStack>
    </Layout>
  );
};

const Layout = styled(VStack)`
  box-sizing: border-box;
  height: 16rem;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.md};
`;

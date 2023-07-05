import { GithubLogoSvg } from '@assets/GithubLogoSvg';
import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Layout>
      <HStack spacing="1rem">
        <Text color={theme.colors.mono.gray300} selectable>
          ©2023. 42Stat
        </Text>
        <Link
          to="https://github.com/orgs/42Statistics/repositories"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogoSvg width="16px" fill={theme.colors.mono.gray300} />
        </Link>
      </HStack>
    </Layout>
  );
};

const Layout = styled.footer`
  width: 100%;
  padding: 10rem 2rem 2rem 2rem;
`;

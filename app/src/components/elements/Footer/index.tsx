import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as GithubLogo } from '@shared/assets/logo/github-logo.svg';
import { HStack, Text } from '@shared/ui-kit';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Layout>
      <HStack spacing="1rem">
        <Text color={theme.colors.mono.gray300}>©2023. 42Stat</Text>
        <Link
          to="https://github.com/orgs/42Statistics/repositories"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo width={24} height={24} fill={theme.colors.mono.gray300} />
        </Link>
      </HStack>
    </Layout>
  );
};

const Layout = styled.footer`
  width: 100%;
  padding: 10rem 2rem 2rem 2rem;
`;

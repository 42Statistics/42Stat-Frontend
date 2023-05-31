import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export const AboveTabletFooter = () => {
  const theme = useTheme();

  return (
    <FooterLayout>
      <HStack h="100%">
        <Text color={theme.colors.mono.gray300} selectable>
          ©2023 42Stat |&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/orgs/42Statistics/repositories"
          >
            <strong>Github</strong>
          </a>
          &nbsp;| 자료에 대한 신뢰 여부는 전적으로 사용자의 책임입니다.
        </Text>
      </HStack>
    </FooterLayout>
  );
};

const FooterLayout = styled.footer`
  width: 100%;
  padding: 10rem 2rem 1rem 2rem;
`;

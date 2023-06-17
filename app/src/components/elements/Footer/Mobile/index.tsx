import { HStack, Text, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export const MobileFooter = () => {
  const theme = useTheme();

  return (
    <FooterLayout>
      <VStack>
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
          </Text>
        </HStack>
        <Text
          color={theme.colors.mono.gray300}
          selectable
          style={{ textAlign: 'center' }}
        >
          자료에 대한 신뢰 여부는 전적으로 사용자의 책임입니다.
        </Text>
      </VStack>
    </FooterLayout>
  );
};

const FooterLayout = styled.footer`
  width: 100%;
  padding: 4rem 2rem 0 2rem;
`;

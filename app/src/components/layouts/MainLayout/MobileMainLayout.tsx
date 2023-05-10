import { VStack } from '@/components/common';
import { TabBar } from '@/components/elements/TabBar';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

export const MobileMainLayout = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={theme.colors.mono.white} />
      </Helmet>
      <VStack
        w="100%"
        h="100%"
        spacing="2rem"
        css={{ backgroundColor: theme.colors.mono.white }}
      >
        <MobilePageLayout>{children}</MobilePageLayout>
      </VStack>
      <TabBar />
    </>
  );
};

const MobilePageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 6rem;
  overflow: auto;
`;

import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
import { AppIntroText } from '@/components/elements/Login/AppIntroText';
import { Divider, HStack, VStack } from '@/components/common';
import { AboveTablet, Mobile } from '@/utils/responsive';
import styled from '@emotion/styled';
import { GoogleLogin } from '@react-oauth/google';
import { Helmet } from 'react-helmet-async';

export const LoginPage = () => {
  return (
    <LoginPageLayout>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <AboveTablet>
        <HStack h="40rem" spacing="5vw">
          <VStack w="25rem" spacing="5rem">
            <AppLogoTitle size="md" />
            <AppIntroText />
          </VStack>
          <Divider orientation="vertical" />
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </HStack>
      </AboveTablet>
      <Mobile>
        <VStack w="25rem" spacing="6rem">
          <VStack spacing="2rem">
            <AppLogoTitle size="md" />
            <AppIntroText />
          </VStack>
          <Divider />
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </VStack>
      </Mobile>
    </LoginPageLayout>
  );
};

const LoginPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    103.55deg,
    #cfc2e9 13.93%,
    #fee4e2 102.93%,
    #ffdb5e 102.94%,
    #d9d9d9 102.94%
  );
`;

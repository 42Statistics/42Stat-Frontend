import { AppLogoSvg } from '@/assets/AppLogoSvg';
import { AppIntroText } from '@/components/elements/Login/AppIntroText';
import { Divider, HStack, Text, VStack } from '@/styles/components';
import { Desktop, Mobile } from '@/styles/responsive';
import styled from '@emotion/styled';
import { GoogleLogin } from '@react-oauth/google';

export const LoginPage = () => {
  return (
    <LoginPageLayout>
      <Desktop>
        <HStack h={400} spacing="5vw">
          <VStack w={250} spacing={50}>
            <AppLogoSvg />
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
      </Desktop>
      <Mobile>
        <VStack w={250} spacing={60}>
          <VStack spacing={20}>
            <AppLogoSvg />
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

import { AppLogoSvg } from '@/assets/AppLogoSvg';
import { Divider, HStack, Text, VStack } from '@/styles/components';
import styled from '@emotion/styled';
import { GoogleLogin } from '@react-oauth/google';

export const LoginPage = () => {
  return (
    <LoginPageLayout>
      <HStack h="400px" spacing={150}>
        <VStack w="250px" spacing={50}>
          <AppLogoSvg />
          <Text css={{ fontWeight: 300 }}>
            42Stat은 42 Intra API를 이용하여 42서울 교육생들의 학습 데이터를
            분석하여 표시해주는 서비스입니다. 평소 궁금했던 부분들을 42Stat과
            함께 알아보세요
          </Text>
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
    </LoginPageLayout>
  );
};

const LoginPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

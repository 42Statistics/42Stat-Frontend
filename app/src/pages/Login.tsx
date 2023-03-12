import styled from '@emotion/styled';
import { GoogleLogin } from '@react-oauth/google';

export const LoginPage = () => {
  return (
    <LoginPageLayout>
      <p>
        42Stat은 42 Intra API를 이용하여 42서울 교육생들의 학습 데이터를
        분석하여 표시해주는 서비스입니다. 평소 궁금했던 부분들을 42Stat과 함께
        알아보세요
      </p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </LoginPageLayout>
  );
};

const LoginPageLayout = styled('div')``;

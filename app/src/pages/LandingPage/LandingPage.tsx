import { Center, Image, VStack, WhiteH1BoldText } from '@/components/common';
import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
import { accessTokenAtom } from '@/utils/atoms/accessTokenAtom';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { needFtOAuthAtom } from '@/utils/atoms/needFtOAuthAtom';
import { refreshTokenAtom } from '@/utils/atoms/refreshTokenAtom';
import { css, useTheme } from '@emotion/react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useSetAtom } from 'jotai';
import ky from 'ky';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // FIXME: import 말고 Styled Components 방식으로 Slick 적용
import { CountUp } from 'use-count-up';
// const GET_USER = gql(`
//   query GetUser($id: Int!) {
//     user(id: $id) {
//       id
//       login
//     }
//   }
// `);

export const LandingPage = () => {
  // TODO: 리더보드 만든 이후 BE 쿼리 위치 정착되면 기준일 HomePage 단에서 전체 다 받아서 description에 주입
  // const { data, loading, error } = useQuery(GET_HOME_PAGE_DESCRIPTION_DATE);
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);
  const setNeedFtOAuth = useSetAtom(needFtOAuthAtom);

  const theme = useTheme();
  const textList = [
    '지난주 블랙홀을 마주한 18명',
    '지금까지 블랙홀을 마주한 610명',
    'PUSH_SWAP과 싸우는 32명',
  ];

  const handleGoogleLoginSuccess = async ({
    clientId,
    credential,
  }: CredentialResponse) => {
    if (!clientId || !credential) {
      return;
    }
    const res = await ky.post(import.meta.env.VITE_GAPI_CALLBACK_URI, {
      json: { clientId, credential },
    });
    const { accessToken, refreshToken, needFtOAuth } = await res.json<{
      accessToken: string;
      refreshToken: string;
      needFtOAuth: boolean;
    }>();
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setNeedFtOAuth(needFtOAuth);
    setIsAuthenticated(true);
  };

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <VStack h="100%" spacing="10rem">
        <AppLogoTitle size="md" color={theme.colors.mono.white} />
        <VStack>
          <WhiteH1BoldText>
            은하수를 여행한지 {<CountUp isCounting end={982} duration={3.5} />}
            일째
          </WhiteH1BoldText>
          <WhiteH1BoldText>
            {<CountUp isCounting end={810} duration={3.5} />}명의 히치하이커와
            함께 여행중
          </WhiteH1BoldText>
          <Slider
            arrows={false}
            infinite
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={3000}
            vertical
            css={SliderCenterStyle}
          >
            {textList.map((text, index) => (
              <Center w="100%" key={index}>
                <WhiteH1BoldText>{text}</WhiteH1BoldText>
              </Center>
            ))}
          </Slider>
        </VStack>
        <Image src="/animated-ship.gif" width="200px" />
        <VStack spacing="2rem">
          {/* <Text
            fontSize={theme.fonts.size.h3}
            fontWeight={theme.fonts.weight.medium}
            color={theme.colors.mono.white}
          >
            🤔 지난 시험의 합격률이 궁금하다면?
          </Text> */}
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={console.log}
          />
        </VStack>
      </VStack>
    </>
  );
};

// Slider 가운데 정렬을 위해 필요한 스타일
const SliderCenterStyle = css`
  .slick-track .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

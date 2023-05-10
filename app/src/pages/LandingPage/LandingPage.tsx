import {
  Button,
  Center,
  Image,
  VStack,
  WhiteH2BoldText,
} from '@/components/common';
import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { css, useTheme } from '@emotion/react';
import { useSetAtom } from 'jotai';
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
  const theme = useTheme();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const textList = [
    '지난주 블랙홀을 마주한 18명',
    '지금까지 블랙홀을 마주한 610명',
    'PUSH_SWAP과 싸우는 32명',
  ];

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <VStack h="100%" spacing="10rem">
        <AppLogoTitle size="md" color={theme.colors.mono.white} />
        <VStack>
          <WhiteH2BoldText>
            은하수를 여행한지{' '}
            {<CountUp isCounting={true} end={982} duration={3.5} />}
            일째
          </WhiteH2BoldText>
          <WhiteH2BoldText>
            {<CountUp isCounting={true} end={810} duration={3.5} />}명의
            히치하이커와 함께 여행중
          </WhiteH2BoldText>
          <Slider
            arrows={false}
            infinite={true}
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            vertical={true}
            css={SliderCenterStyle}
          >
            {textList.map((text, index) => (
              <Center w="100%" key={index}>
                <WhiteH2BoldText>{text}</WhiteH2BoldText>
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
          <Button
            size="md"
            onClick={() => setIsAuthenticated(true)}
            text="지금 시작하기 🚀"
            bg="linear-gradient(122deg, rgba(34,160,195,1) 0%, rgba(109,45,253,1) 120%)"
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

// import { Divider, HStack, VStack, center } from '@/components/common';
// import { AppLogoTitle } from '@/components/elements/AppLogoTitle';
// import { AppIntroText } from '@/components/elements/Login/AppIntroText';
// import { AboveTablet, Mobile } from '@/utils/responsive/Device';
// import styled from '@emotion/styled';
// import { GoogleLogin } from '@react-oauth/google';
// import { Helmet } from 'react-helmet-async';

// export const LoginPage = () => {
//   return (
//     <LoginPageLayout>
//       <Helmet>
//         <title>42Stat</title>
//       </Helmet>
//       <AboveTablet>
//         <HStack h="40rem" spacing="5vw">
//           <VStack w="25rem" spacing="5rem">
//             <AppLogoTitle size="md" />
//             <AppIntroText />
//           </VStack>
//           <Divider orientation="vertical" />
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               console.log(credentialResponse);
//             }}
//             onError={() => {
//               console.log('Login Failed');
//             }}
//           />
//         </HStack>
//       </AboveTablet>
//       <Mobile>
//         <VStack w="25rem" spacing="6rem">
//           <VStack spacing="2rem">
//             <AppLogoTitle size="md" />
//             <AppIntroText />
//           </VStack>
//           <Divider />
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               console.log(credentialResponse);
//             }}
//             onError={() => {
//               console.log('Login Failed');
//             }}
//           />
//         </VStack>
//       </Mobile>
//     </LoginPageLayout>
//   );
// };

// const LoginPageLayout = styled.div`;
//   ${center}
//   height: 100%;
//   background: linear-gradient(
//     103.55deg,
//     #cfc2e9 13.93%,
//     #fee4e2 102.93%,
//     #ffdb5e 102.94%,
//     #d9d9d9 102.94%
//   );
// `;

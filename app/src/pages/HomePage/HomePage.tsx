import { Center, Text, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
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

export const HomePage = () => {
  // TODO: 리더보드 만든 이후 BE 쿼리 위치 정착되면 기준일 HomePage 단에서 전체 다 받아서 description에 주입
  // const { data, loading, error } = useQuery(GET_HOME_PAGE_DESCRIPTION_DATE);
  const theme = useTheme();
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
      <VStack w="100%" h="100%" align="start" justify="start">
        <Text
          fontSize={theme.fonts.size.h2}
          fontWeight={theme.fonts.weight.bold}
          color={theme.colors.mono.white}
        >
          은하수를 여행한지{' '}
          {<CountUp isCounting={true} end={982} duration={3.5} />}일째
        </Text>
        <Text
          fontSize={theme.fonts.size.h2}
          fontWeight={theme.fonts.weight.bold}
          color={theme.colors.mono.white}
        >
          {<CountUp isCounting={true} end={810} duration={3.5} />}명의
          히치하이커와 함께 여행중
        </Text>
        <Slider
          arrows={false}
          infinite={true}
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          vertical={true}
          css={{ width: '100%' }}
        >
          {textList.map((text, index) => (
            <Text
              key={index}
              fontSize={theme.fonts.size.h2}
              fontWeight={theme.fonts.weight.bold}
              color={theme.colors.mono.white}
            >
              {text}
            </Text>
          ))}
        </Slider>
        <Center w="100%" h="100%">
          <img src="/animated-ship.gif" width="300px" />
        </Center>
      </VStack>
    </>
  );
};

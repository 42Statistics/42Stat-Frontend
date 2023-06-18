import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import animated_ship from '@assets/animated-ship.gif';
import {
  Center,
  Image,
  StartButton,
  VStack,
  WhiteH1BoldText,
} from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { css, useTheme } from '@emotion/react';
import { withHead } from '@hoc/withHead';
import { ROUTES } from '@routes/ROUTES';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // FIXME: import 말고 Styled Components 방식으로 Slick 적용
import { CountUp } from 'use-count-up';

const GET_LANDING = gql(/* GraphQL */ `
  query GetLanding {
    getLanding {
      daysAfterBeginAt
      aliveCount
      blackholedCount
      memberCount
      evalCount
      trendingProject {
        projectPreview {
          id
          name
          url
        }
        rank
        value
      }
    }
  }
`);

const LandingPage = () => {
  const { loading, error, data } = useQuery(GET_LANDING);
  const [strs, setStrs] = useState<string[]>([]);
  const theme = useTheme();

  useEffect(() => {
    if (!data) {
      return;
    }
    const {
      blackholedCount,
      memberCount,
      evalCount,
      trendingProject: {
        projectPreview: { name: trendingProjectName },
        value,
      },
    } = data.getLanding;
    setStrs([
      `지금까지 블랙홀을 마주한 ${blackholedCount.toLocaleString()}명`,
      `${trendingProjectName}과 싸우는 ${value.toLocaleString()}명`,
      `자기만의 여행을 시작한 ${memberCount.toLocaleString()}명`,
      `${evalCount.toLocaleString()}번째 평가가 지금 진행 중`,
    ]);
  }, [data]);

  if (loading) {
    return <div>loading...</div>; // TODO: UI 수정
  }
  if (error) {
    return <div>error...</div>; // TODO: UI 수정. 에러 발생 시에도 다른 문자열로 대체하여 랜딩페이지 보여주기
  }
  if (!data) {
    return <div>no data...</div>; // TODO: UI 수정
  }

  const { daysAfterBeginAt, aliveCount } = data.getLanding;

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <VStack h="100%" spacing="10rem">
        <a href="/">
          <AppLogoTitle size="md" color={theme.colors.mono.white} />
        </a>
        <VStack spacing="1rem">
          <WhiteH1BoldText>
            은하수를 여행한지{' '}
            {<CountUp isCounting end={daysAfterBeginAt} duration={3.5} />}
            일째
          </WhiteH1BoldText>
          <WhiteH1BoldText>
            {<CountUp isCounting end={aliveCount} duration={3.5} />}
            명의 히치하이커와 함께 여행중
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
            {strs.map((str, index) => (
              <Center w="100%" key={index}>
                <WhiteH1BoldText>{str}</WhiteH1BoldText>
              </Center>
            ))}
          </Slider>
        </VStack>
        <Image src={animated_ship} alt="우주를 떠다니는 배" width="200px" />
        <VStack spacing="2rem">
          <Link to={ROUTES.LOGIN}>
            <StartButton>지금 시작하기 🚀</StartButton>
          </Link>
        </VStack>
      </VStack>
    </>
  );
};

export default withHead(LandingPage);

// Slider 가운데 정렬을 위해 필요한 스타일
const SliderCenterStyle = css`
  .slick-track .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Center, VStack, WhiteH2BoldText } from '@components/common';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
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

type IntroData = {
  daysAfterBeginAt: number;
  aliveCount: number;
  blackholedCount: number;
  memberCount: number;
  evalCount: number;
  trendingProjectName: string;
  trendingProjectValue: number;
};

export const Introduction = () => {
  const { data } = useQuery(GET_LANDING);

  const [introData, setIntroData] = useState<IntroData>({
    daysAfterBeginAt: 1262,
    aliveCount: 1030,
    blackholedCount: 1326,
    memberCount: 244,
    evalCount: 82703,
    trendingProjectName: 'Born2beroot',
    trendingProjectValue: 76,
  });

  const strs = [
    `지금까지 블랙홀을 마주한 ${introData.blackholedCount.toLocaleString()}명`,
    `${
      introData.trendingProjectName
    }과 싸우는 ${introData.trendingProjectValue.toLocaleString()}명`,
    `본격적인 여행을 시작한 ${introData.memberCount.toLocaleString()}명`,
    `${introData.evalCount.toLocaleString()}번째 평가가 지금 진행 중`,
  ];

  useEffect(() => {
    if (!data) {
      return;
    }
    const {
      daysAfterBeginAt,
      aliveCount,
      blackholedCount,
      memberCount,
      evalCount,
      trendingProject: {
        projectPreview: { name: trendingProjectName },
        value: trendingProjectValue,
      },
    } = data.getLanding;
    setIntroData({
      daysAfterBeginAt,
      aliveCount,
      blackholedCount,
      memberCount,
      evalCount,
      trendingProjectName,
      trendingProjectValue,
    });
  }, [data]);

  return (
    <VStack h="10rem" spacing="1rem">
      <WhiteH2BoldText>
        은하수를 여행한지{' '}
        {<CountUp isCounting end={introData.daysAfterBeginAt} duration={3.5} />}
        일째
      </WhiteH2BoldText>
      <WhiteH2BoldText>
        {<CountUp isCounting end={introData.aliveCount} duration={3.5} />}
        명의 히치하이커와 함께 여행중
      </WhiteH2BoldText>
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
          <Center key={index}>
            <WhiteH2BoldText>{str}</WhiteH2BoldText>
          </Center>
        ))}
      </Slider>
    </VStack>
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

import { useQuery } from '@apollo/client';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { gql } from '@shared/__generated__';
import { BoldText } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
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
  const theme = useTheme();
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

  const device = useDeviceType();

  const getFontSize = (device: string | null) => {
    switch (device) {
      case 'desktop':
        return '3.6rem';
      case 'tablet':
        return '2.6rem';
      case 'mobile':
        return '1.6rem';
      default:
        return '3.6rem';
    }
  };

  const fontSize = getFontSize(device);

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
    <Layout>
      <BoldText fontSize={fontSize} color={theme.colors.mono.absolute.white}>
        은하수를 여행한지{' '}
        {
          <CountUp
            isCounting
            start={1000}
            end={introData.daysAfterBeginAt}
            duration={1.5}
          />
        }
        일째
      </BoldText>
      <BoldText fontSize={fontSize} color={theme.colors.mono.absolute.white}>
        {
          <CountUp
            isCounting
            start={800}
            end={introData.aliveCount}
            duration={1.5}
          />
        }
        명의 히치하이커와 함께 여행중
      </BoldText>
      <Slider
        arrows={false}
        infinite
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={3000}
        vertical
        pauseOnHover={false}
        css={device !== 'desktop' && SliderCenterStyle}
      >
        {strs.map((str, idx) => (
          <BoldText
            fontSize={fontSize}
            key={idx}
            color={theme.colors.mono.absolute.white}
          >
            {str}
          </BoldText>
        ))}
      </Slider>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-behavior: smooth;

  ${mq({
    width: ['100%', '100%', '60rem'],
    alignItems: ['center', 'center', 'flex-start'],
  })}
`;

// Slider 가운데 정렬을 위해 필요한 스타일
const SliderCenterStyle = css`
  .slick-slide {
    text-align: center;
  }
`;

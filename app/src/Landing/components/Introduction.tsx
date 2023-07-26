import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { VStack, WhiteH2BoldText } from '@shared/ui-kit';
import { useEffect, useState } from 'react';
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

  // TODO: text slider 구현
  return (
    <VStack spacing="1rem">
      <WhiteH2BoldText>
        은하수를 여행한지{' '}
        {<CountUp isCounting end={introData.daysAfterBeginAt} duration={3.5} />}
        일째
      </WhiteH2BoldText>
      <WhiteH2BoldText>
        {<CountUp isCounting end={introData.aliveCount} duration={3.5} />}
        명의 히치하이커와 함께 여행중
      </WhiteH2BoldText>
      <WhiteH2BoldText>{strs[0]}</WhiteH2BoldText>
      {/* {strs.map((str, index) => (
        <WhiteH2BoldText key={index}>{str}</WhiteH2BoldText>
      ))} */}
    </VStack>
  );
};

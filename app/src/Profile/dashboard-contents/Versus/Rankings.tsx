import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { getPercentile } from '@/Profile/utils/getPercentile';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { gql } from '@shared/__generated__';
import { RadarChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { useContext } from 'react';

const GET_RANKINGS_VERSUS = gql(/* GraphQL */ `
  query GetRankingsVersus($login1: String!, $login2: String!) {
    data1: getPersonalVersus(login: $login1) {
      levelRank {
        rank
      }
      totalScoreRank {
        rank
      }
      totalEvalCountRank {
        rank
      }
      currWeekExpIncreamentRank {
        rank
      }
      currWeekScoreRank {
        rank
      }
      currWeekEvalCountRank {
        rank
      }
    }
    data2: getPersonalVersus(login: $login2) {
      levelRank {
        rank
      }
      totalScoreRank {
        rank
      }
      totalEvalCountRank {
        rank
      }
      currWeekExpIncreamentRank {
        rank
      }
      currWeekScoreRank {
        rank
      }
      currWeekEvalCountRank {
        rank
      }
    }
  }
`);

export const Rankings = () => {
  const myUserProfile = useContext(MyUserProfileContext);
  const userProfile = useContext(UserProfileContext);

  const title = '랭킹 백분위수 비교';
  const description = '레벨, 코알리숑 포인트, 평가 횟수 누적/월간 랭킹';
  const { loading, error, data } = useQuery(GET_RANKINGS_VERSUS, {
    variables: { login1: myUserProfile.login, login2: userProfile.login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} />;
  }
  if (!data || !data.data1 || !data.data2) {
    return <DashboardContentNotFound title={title} />;
  }

  const {
    data1: {
      levelRank: { rank: myLevelRank },
      totalScoreRank: { rank: myTotalScoreRank },
      totalEvalCountRank: { rank: myTotalEvalCountRank },
      currWeekExpIncreamentRank: { rank: myCurrWeekExpIncreamentRank },
      currWeekScoreRank: { rank: myCurrWeekScoreRank },
      currWeekEvalCountRank: { rank: myCurrWeekEvalCountRank },
    },
    data2: {
      levelRank: { rank: levelRank },
      totalScoreRank: { rank: totalScoreRank },
      totalEvalCountRank: { rank: totalEvalCountRank },
      currWeekExpIncreamentRank: { rank: currWeekExpIncreamentRank },
      currWeekScoreRank: { rank: currWeekScoreRank },
      currWeekEvalCountRank: { rank: currWeekEvalCountRank },
    },
  } = data;

  const total = 2350; // FIXME: rank와 total을 함께 받기로 합의함

  const myLevelRankPercentile = getPercentile(myLevelRank, total);
  const myTotalScoreRankPercentile = getPercentile(myTotalScoreRank, total);
  const myTotalEvalCountRankPercentile = getPercentile(
    myTotalEvalCountRank,
    total,
  );
  const myCurrWeekExpIncreamentRankPercentile = getPercentile(
    myCurrWeekExpIncreamentRank,
    total,
  );
  const myCurrWeekScoreRankPercentile = getPercentile(
    myCurrWeekScoreRank,
    total,
  );
  const myCurrWeekEvalCountRankPercentile = getPercentile(
    myCurrWeekEvalCountRank,
    total,
  );

  const levelRankPercentile = getPercentile(levelRank, total);
  const totalScoreRankPercentile = getPercentile(totalScoreRank, total);
  const totalEvalCountRankPercentile = getPercentile(totalEvalCountRank, total);
  const currWeekExpIncreamentRankPercentile = getPercentile(
    currWeekExpIncreamentRank,
    total,
  );
  const currWeekScoreRankPercentile = getPercentile(currWeekScoreRank, total);
  const currWeekEvalCountRankPercentile = getPercentile(
    currWeekEvalCountRank,
    total,
  );

  const categories = [
    '레벨',
    '포인트',
    '평가 수',
    '경험치(월)',
    '포인트(월)',
    '평가 수(월)',
  ];
  const series = [
    {
      name: myUserProfile.login,
      data: [
        myLevelRankPercentile,
        myTotalScoreRankPercentile,
        myTotalEvalCountRankPercentile,
        myCurrWeekExpIncreamentRankPercentile,
        myCurrWeekScoreRankPercentile,
        myCurrWeekEvalCountRankPercentile,
      ],
    },
    {
      name: userProfile.login,
      data: [
        levelRankPercentile,
        totalScoreRankPercentile,
        totalEvalCountRankPercentile,
        currWeekExpIncreamentRankPercentile,
        currWeekScoreRankPercentile,
        currWeekEvalCountRankPercentile,
      ],
    },
  ];

  return (
    <DashboardContent title={title} description={description} type="ApexCharts">
      <RankingsChart categories={categories} series={series} />
    </DashboardContent>
  );
};

type RankingsChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
};

const RankingsChart = ({ categories, series }: RankingsChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.primary.default, theme.colors.accent.default],
    xaxis: {
      categories,
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
    },
  };

  return <RadarChart series={series} options={options}></RadarChart>;
};

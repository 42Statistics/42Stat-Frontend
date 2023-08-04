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
      levelRankWithTotal {
        rank
        totalUserCount
      }
      totalScoreRankWithTotal {
        rank
        totalUserCount
      }
      totalEvalCountRankWithTotal {
        rank
        totalUserCount
      }
      currMonthExpIncreamentRankWithTotal {
        rank
        totalUserCount
      }
      currMonthScoreRankWithTotal {
        rank
        totalUserCount
      }
      currMonthEvalCountRankWithTotal {
        rank
        totalUserCount
      }
    }
    data2: getPersonalVersus(login: $login2) {
      levelRankWithTotal {
        rank
        totalUserCount
      }
      totalScoreRankWithTotal {
        rank
        totalUserCount
      }
      totalEvalCountRankWithTotal {
        rank
        totalUserCount
      }
      currMonthExpIncreamentRankWithTotal {
        rank
        totalUserCount
      }
      currMonthScoreRankWithTotal {
        rank
        totalUserCount
      }
      currMonthEvalCountRankWithTotal {
        rank
        totalUserCount
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
      levelRankWithTotal: { rank: myLevelRank },
      totalScoreRankWithTotal: { rank: myTotalScoreRank },
      totalEvalCountRankWithTotal: { rank: myTotalEvalCountRank },
      currMonthExpIncreamentRankWithTotal: {
        rank: myCurrMonthExpIncreamentRank,
      },
      currMonthScoreRankWithTotal: { rank: myCurrMonthScoreRank },
      currMonthEvalCountRankWithTotal: { rank: myCurrMonthEvalCountRank },
    },
    data2: {
      levelRankWithTotal: { rank: levelRank, totalUserCount: levelRankTotal },
      totalScoreRankWithTotal: {
        rank: totalScoreRank,
        totalUserCount: totalScoreRankTotal,
      },
      totalEvalCountRankWithTotal: {
        rank: totalEvalCountRank,
        totalUserCount: totalEvalCountRankTotal,
      },
      currMonthExpIncreamentRankWithTotal: {
        rank: currMonthExpIncreamentRank,
        totalUserCount: currMonthExpIncreamentRankTotal,
      },
      currMonthScoreRankWithTotal: {
        rank: currMonthScoreRank,
        totalUserCount: currMonthScoreRankTotal,
      },
      currMonthEvalCountRankWithTotal: {
        rank: currMonthEvalCountRank,
        totalUserCount: currMonthEvalCountRankTotal,
      },
    },
  } = data;

  const myLevelRankPercentile = getPercentile(myLevelRank, levelRankTotal);
  const myTotalScoreRankPercentile = getPercentile(
    myTotalScoreRank,
    totalScoreRankTotal,
  );
  const myTotalEvalCountRankPercentile = getPercentile(
    myTotalEvalCountRank,
    totalEvalCountRankTotal,
  );
  const myCurrMonthExpIncreamentRankPercentile = getPercentile(
    myCurrMonthExpIncreamentRank,
    currMonthExpIncreamentRankTotal,
  );
  const myCurrMonthScoreRankPercentile = getPercentile(
    myCurrMonthScoreRank,
    currMonthScoreRankTotal,
  );
  const myCurrMonthEvalCountRankPercentile = getPercentile(
    myCurrMonthEvalCountRank,
    currMonthEvalCountRankTotal,
  );

  const levelRankPercentile = getPercentile(levelRank, levelRankTotal);
  const totalScoreRankPercentile = getPercentile(
    totalScoreRank,
    totalScoreRankTotal,
  );
  const totalEvalCountRankPercentile = getPercentile(
    totalEvalCountRank,
    totalEvalCountRankTotal,
  );
  const currMonthExpIncreamentRankPercentile = getPercentile(
    currMonthExpIncreamentRank,
    currMonthExpIncreamentRankTotal,
  );
  const currMonthScoreRankPercentile = getPercentile(
    currMonthScoreRank,
    currMonthScoreRankTotal,
  );
  const currMonthEvalCountRankPercentile = getPercentile(
    currMonthEvalCountRank,
    currMonthEvalCountRankTotal,
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
        myCurrMonthExpIncreamentRankPercentile,
        myCurrMonthScoreRankPercentile,
        myCurrMonthEvalCountRankPercentile,
      ],
    },
    {
      name: userProfile.login,
      data: [
        levelRankPercentile,
        totalScoreRankPercentile,
        totalEvalCountRankPercentile,
        currMonthExpIncreamentRankPercentile,
        currMonthScoreRankPercentile,
        currMonthEvalCountRankPercentile,
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

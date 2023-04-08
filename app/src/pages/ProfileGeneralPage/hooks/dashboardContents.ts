import {
  DestinyUsers,
  Difficulty,
  LastPass,
  LastRegistered,
  LevelGraph,
  LogtimeInfo,
  PrefferedTime,
  TeamInfo,
  TotalEvalCnt,
} from '@/pages/ProfileGeneralPage/contents/index';
import { DashboardItemProps } from '@/utils/types/Dashboard';
import { PrefferedCluster } from '../contents/PrefferedCluster';

export const dashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    title: '최근 통과한 과제',
    content: LastPass,
  },
  {
    id: 1,
    title: '최근 신청한 과제',
    content: LastRegistered,
  },
  {
    id: 2,
    title: '누적 평가 횟수',
    content: TotalEvalCnt,
  },
  {
    id: 3,
    title: '월간 출석 시간',
    description: '(2023.01. / 1개월)',
    content: LogtimeInfo,
  },
  {
    id: 4,
    title: '주 접속 시간대',
    description: '(2023.01. / 1개월)',
    content: PrefferedTime,
  },
  {
    id: 5,
    title: '주 접속 클러스터',
    description: '(2023.01. / 1개월)',
    content: PrefferedCluster,
  },
  {
    id: 6,
    title: '운명의 장난 스코어',
    description: '평가에서 가장 자주 마주친 유저 랭킹',
    content: DestinyUsers,
  },
  {
    id: 7,
    content: TeamInfo,
  },
  {
    id: 8,
    title: '이 유저를 평가자로 만난다면?',
    content: Difficulty,
  },
  {
    id: 9,
    title: '이 유저를 캐릭터로 표현한다면?',
    description: '(과제 점수, 레벨 증가 속도, 접속 시간, 평가 횟수 기준)',
    content: LastPass,
  },
  {
    id: 10,
    title: '레벨 증가 그래프',
    description: '(2023.03.01. 기준 / 과거 1년)',
    content: LevelGraph,
  },
];

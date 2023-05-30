import type { DashboardItemProps } from '@utils/types/Dashboard';
import {
  BeginAt,
  BlackholedAt,
  CurrentCoalitionScore,
  CurrentWallet,
  LastPass,
  LastRegistered,
  LevelGraph,
  LogtimeInfo,
  PrefferedCluster,
  PrefferedTime,
  SimilarCharacter,
  TeamInfo,
} from '../contents';

export const profileGeneralTabDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: BeginAt,
  },
  {
    id: 1,
    content: LastPass,
  },
  {
    id: 2,
    content: LogtimeInfo,
  },
  {
    id: 3,
    content: LastRegistered,
  },
  {
    id: 4,
    content: CurrentWallet,
  },
  {
    id: 5,
    content: PrefferedCluster,
  },
  {
    id: 6,
    content: CurrentCoalitionScore,
  },
  {
    id: 7,
    content: BlackholedAt,
  },
  {
    id: 8,
    content: LevelGraph,
  },
  {
    id: 9,
    content: SimilarCharacter,
  },
  {
    id: 10,
    content: PrefferedTime,
  },
  {
    id: 11,
    content: TeamInfo,
  },
];

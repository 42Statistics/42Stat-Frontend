import type { DashboardItemProps } from '@/utils/types/Dashboard';
import {
  BlackholedAt,
  CurrentCoalitionScore,
  CurrentWallet,
  LastPass,
  LastRegistered,
  LevelGraph,
  LogtimeInfo,
  PooledAt,
  PrefferedCluster,
  PrefferedTime,
  SimilarCharacter,
  TeamInfo,
} from '../contents';

export const profileGeneralTabDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: PooledAt,
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

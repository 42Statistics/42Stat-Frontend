import type { DashboardItemProps } from '@utils/types/Dashboard';
import {
  BeginAt,
  BlackholedAt,
  CoalitionScore,
  Wallet,
  LastPass,
  LastRegistered,
  LevelRecords,
  LogTime,
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
    content: LogTime,
  },
  {
    id: 3,
    content: LastRegistered,
  },
  {
    id: 4,
    content: Wallet,
  },
  {
    id: 5,
    content: PrefferedCluster,
  },
  {
    id: 6,
    content: CoalitionScore,
  },
  {
    id: 7,
    content: BlackholedAt,
  },
  {
    id: 8,
    content: LevelRecords,
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

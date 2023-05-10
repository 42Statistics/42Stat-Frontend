import type { DashboardItemProps } from '@/utils/types/Dashboard';
import {
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
    content: LastPass,
  },
  {
    id: 1,
    content: LastRegistered,
  },
  {
    id: 2,
    content: LogtimeInfo,
  },
  {
    id: 3,
    content: PrefferedCluster,
  },
  {
    id: 4,
    content: PrefferedTime,
  },
  {
    id: 5,
    content: TeamInfo,
  },
  {
    id: 6,
    content: SimilarCharacter,
  },
  {
    id: 7,
    content: LevelGraph,
  },
];

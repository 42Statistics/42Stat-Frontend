import { DashboardItemProps } from '@/types/Dashboard';
import {
  AverageCommentLength,
  AverageFinalMark,
  DayFromBeginAt,
  Level,
  LevelRecords,
  Rankings,
  TotalEvalCount,
  TotalLogtime,
} from '../contents';

export const profileVersusTabDashboardContents: DashboardItemProps[] = [
  {
    id: 0,
    content: Level,
  },
  {
    id: 1,
    content: DayFromBeginAt,
  },
  {
    id: 2,
    content: TotalLogtime,
  },
  {
    id: 3,
    content: TotalEvalCount,
  },
  {
    id: 4,
    content: AverageFinalMark,
  },
  {
    id: 5,
    content: AverageCommentLength,
  },
  {
    id: 6,
    content: LevelRecords,
  },
  {
    id: 7,
    content: Rankings,
  },
];

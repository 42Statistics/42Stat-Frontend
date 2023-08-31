import { DashboardItemProps } from '@shared/types/Dashboard';
import { Blackhole, Level } from '../dashboard-contents';

export const calculatorPageDashboardContents: DashboardItemProps[] = [
	{
		id: 0,
		content: Blackhole,
	},
	{
		id: 1,
		content: Level,
	},
];

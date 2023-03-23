import { PieChart } from './presets/PieChart';

type SizeType = {
  size: 'sm' | 'lg';
};

export const PieTestChart = ({ size }: SizeType) => {
  const data = [44, 55, 41, 17, 15];
  const labels = ['A', 'B', 'C', 'D', 'E'];

  return <PieChart data={data} labels={labels} size={size} />;
};

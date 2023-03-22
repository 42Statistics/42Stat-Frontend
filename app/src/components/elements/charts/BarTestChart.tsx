import BarChart from './presets/BarChart';

type SizeType = {
  size: 'sm' | 'lg' | 'long';
};

const BarTestChart = ({ size }: SizeType) => {
  // 따로 빼낼 수도 있음
  const data = [44, 55, 41, 67, 22, 43];
  const labels = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'];

  return <BarChart data={data} labels={labels} size={size} />;
};

export default BarTestChart;

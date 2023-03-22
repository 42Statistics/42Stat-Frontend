import LineChart from './presets/LineChart';

//gql 작성후 아래 options와 series로 변환

type SizeType = {
  size: 'sm' | 'lg' | 'long';
};
const LineTestChart = ({ size }: SizeType) => {
  // 따로 빼낼 수도 있음
  const data = [30, 40, 25, 50, 49, 21, 70, 51, 42];
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
  ];

  return <LineChart data={data} labels={labels} size={size} />;
};

export default LineTestChart;

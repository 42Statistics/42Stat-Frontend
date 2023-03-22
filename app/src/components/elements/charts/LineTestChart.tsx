import LineChart from './presets/LineChart';

//gql 작성후 아래 options와 series로 변환

type SizeType = {
  size: string | number | undefined;
};
const LineTestChart = ({ size = '250rem' }: SizeType) => {
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

  return <LineChart data={data} labels={labels} height={size} />;
};

export default LineTestChart;

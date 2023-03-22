import ReactApexChart from 'react-apexcharts';
import PieChart from './presets/PieChart';

type SizeType = {
  size: string | number | undefined;
};

const PieTestChart = ({ size = '250rem' }: SizeType) => {
  const data = [44, 55, 41, 17, 15];
  const labels = ['A', 'B', 'C', 'D', 'E'];

  // return <PieChart options={options} series={data} height={height} />;
  return <PieChart data={data} labels={labels} width={size} />;
};

export default PieTestChart;

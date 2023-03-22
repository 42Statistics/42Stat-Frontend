import ReactApexChart from 'react-apexcharts';

type PieChartProps = {
  data: number[];
  labels: string[];
  size: 'sm' | 'lg';
};

const PieChart = ({ data, labels, size = 'sm' }: PieChartProps) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: labels,
    responsive: [
      {
        /**
         * 480 픽셀 미만일때 반응형으로 하는옵션
         * 넓이를 200으로 조정하고 범례의 위치를 bottom으로 조정한다
         * */
        breakpoint: 3000,
        options: {
          chart: {
            // width: width,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={data}
      height={size === 'sm' ? '280' : '370'}
      width={size === 'sm' ? '300' : '400'}
      type="pie"
    />
  );
};
export default PieChart;

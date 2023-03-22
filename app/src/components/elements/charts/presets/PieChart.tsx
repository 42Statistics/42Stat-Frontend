import ReactApexChart from 'react-apexcharts';

type PieChartProps = {
  data: number[];
  labels: string[];
  width: string | number | undefined;
};

const PieChart = ({ data, labels, width }: PieChartProps) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
      width: `${width}`,
    },
    labels: labels,
    responsive: [
      {
        /**
         * 480 픽셀 미만일때 반응형으로 하는옵션
         * 넓이를 200으로 조정하고 범례의 위치를 bottom으로 조정한다
         * */
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return <ReactApexChart options={options} series={data} type="pie" />;
};
export default PieChart;

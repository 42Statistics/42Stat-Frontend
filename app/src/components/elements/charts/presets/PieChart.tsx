import ReactApexChart from 'react-apexcharts';

export const PieChart = ({ data, labels, size }: ChartProps) => {
  let chartWidth, chartHeight;
  switch (size) {
    case 'sm':
      chartWidth = '300';
      chartHeight = '280';
      break;
    default:
      chartWidth = '400';
      chartHeight = '370';
      break;
  }
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
      height={chartHeight}
      width={chartWidth}
      type="pie"
    />
  );
};

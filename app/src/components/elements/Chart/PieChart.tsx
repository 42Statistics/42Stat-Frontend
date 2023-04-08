import { useTheme } from '@emotion/react';
import ReactApexChart from 'react-apexcharts';

export const PieChart = ({ data, labels }: ChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
      toolbar: {
        show: false,
      },
    },
    labels: labels,
    plotOptions: {
      pie: {
        startAngle: -270,
        endAngle: 90,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      theme.colors.primary.default,
      theme.colors.secondary.default,
      theme.colors.third.default,
    ],
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
      width="100%"
      height="100%"
      type="pie"
    />
  );
};

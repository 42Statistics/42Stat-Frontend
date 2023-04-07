import { useTheme } from '@emotion/react';
import ReactApexChart from 'react-apexcharts';

export const LineChart = ({
  data,
  labels,
  showData,
  yUnit,
  seriesName,
}: ChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: labels,
      axisBorder: {
        offsetX: -10,
      },
    },
    grid: {
      padding: {
        left: 20, // or whatever value that works
        // right: 30, // or whatever value that works
      },
    },
    colors: [
      theme.colors.primary.default,
      theme.colors.secondary.default,
      theme.colors.third.default,
    ],
    tooltip: {
      y: {
        formatter: function (
          value,
          { series, seriesIndex, dataPointIndex, w },
        ) {
          return showData![dataPointIndex];
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'darken',
          value: 0.8,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'darken',
          value: 0.6,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + `${yUnit}`;
        },
      },
      // title: {
      //   text: "Percent"
      // }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        // colors: ['black'],
      },
      // formatter: function (val, opt) {
      //   return showData![idx++];
      // },
    },
    stroke: {
      width: 2,
      // curve: 'smooth',
      curve: 'straight',
    },
    responsive: [
      {
        /**
         * 480 픽셀 미만일때 반응형으로 하는옵션
         * 넓이를 200으로 조정하고 범례의 위치를 bottom으로 조정한다
         * */
        breakpoint: 3000,
        options: {
          chart: {
            // width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series: ApexAxisChartSeries = [
    {
      name: seriesName,
      data: data,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      width="100%"
      height="100%"
      series={series}
      type="line"
    />
  );
};

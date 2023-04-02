import { convertToMillion } from '@/utils/utilFucs';
import { useTheme } from '@emotion/react';
import ReactApexChart from 'react-apexcharts';

export const CoalitionStackChart = ({
  data,
  labels,
  size,
  showData,
  yUnit,
  seriesName,
}: ChartProps) => {
  const theme = useTheme();
  let chartWidth, chartHeight;
  switch (size) {
    case 'sm':
      chartWidth = '300';
      chartHeight = '250';
      break;
    case 'long':
      chartWidth = '1200';
      chartHeight = '350';
      break;
    default:
      chartWidth = '400';
      chartHeight = '350';
  }

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: labels,
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    colors: [
      theme.colors.coalition.gun,
      theme.colors.coalition.gon,
      theme.colors.coalition.gam,
      theme.colors.coalition.lee,
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
          return convertToMillion(value, 1);
        },
      },
      // title: {
      //   text: "Percent"
      // }
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: '12px',
        colors: ['black'],
      },
      // formatter: function (val, opt) {
      //   return showData![idx++];
      // },
    },
    // stroke: {
    //   width: 1,
    //   // curve: 'smooth',
    //   curve: 'straight',
    // },
    fill: {
      type: 'solid',
      opacity: 1,
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
      name: `${seriesName}`,
      data: data,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      height={chartHeight}
      width={chartWidth}
      series={series}
      type="bar"
    />
  );
};

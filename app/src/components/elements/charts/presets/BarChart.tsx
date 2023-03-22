import ReactApexChart from 'react-apexcharts';

export const BarChart = ({ data, labels, size }: ChartProps) => {
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
    // theme: {
    //   mode: "dark",
    // },
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: labels,
    },
    // yaxis: {
    //   min: 0,
    //   title: {
    //     text: 'Values',
    //   },
    // },
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
      name: 'series-1',
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

import ReactApexChart from 'react-apexcharts';

type BarChartProps = {
  data: number[];
  labels: string[];
  size: 'sm' | 'lg' | 'long';
};

const BarChart = ({ data, labels, size = 'sm' }: BarChartProps) => {
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
      height={size === 'sm' ? '250' : '350'}
      width={size === 'sm' ? '300' : size === 'long' ? '1200' : '400'}
      series={series}
      type="bar"
    />
  );
};

export default BarChart;

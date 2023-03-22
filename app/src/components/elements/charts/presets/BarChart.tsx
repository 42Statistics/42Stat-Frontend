import ReactApexChart from 'react-apexcharts';

type BarChartProps = {
  data: number[];
  labels: string[];
  height: string | number | undefined;
};

const BarChart = ({ data, labels, height }: BarChartProps) => {
  const options: ApexCharts.ApexOptions = {
    // theme: {
    //   mode: "dark",
    // },
    chart: {
      type: 'bar',
      height: `${height}`,
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

  const series: ApexAxisChartSeries = [
    {
      name: 'series-1',
      data: data,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={`${height}`}
    />
  );
};

export default BarChart;

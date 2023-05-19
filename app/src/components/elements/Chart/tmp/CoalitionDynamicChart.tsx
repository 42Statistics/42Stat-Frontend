// import { chunkArray, convertToMillion } from '@/utils/chart';
// import { useTheme } from '@emotion/react';
// import ReactApexChart from 'react-apexcharts';

// export const CoalitionDynamicChart = ({
//   data,
//   labels,
//   showData,
//   yUnit,
//   seriesName,
// }: ChartProps) => {
//   //4등분 해서 건곤감리 시리즈의 배열로 만들기
//   const chunkedData = chunkArray<number>(data, 4);
//   const [dataGun, dataGon, dataGam, dataLee] = chunkedData;

//   const theme = useTheme();

//   const options: ApexCharts.ApexOptions = {
//     chart: {
//       type: 'line',
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },
//     xaxis: {
//       categories: labels,
//     },
//     colors: [
//       theme.colors.coalition.gun,
//       theme.colors.coalition.gon,
//       theme.colors.coalition.gam,
//       theme.colors.coalition.lee,
//     ],
//     states: {
//       normal: {
//         filter: {
//           type: 'none',
//           value: 0,
//         },
//       },
//       hover: {
//         filter: {
//           type: 'darken',
//           value: 0.8,
//         },
//       },
//       active: {
//         allowMultipleDataPointsSelection: false,
//         filter: {
//           type: 'darken',
//           value: 0.6,
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         formatter: function (value) {
//           return convertToMillion(value, 2);
//         },
//       },
//       // title: {
//       //   text: "Percent"
//       // }
//     },
//     dataLabels: {
//       enabled: false,
//       style: {
//         fontSize: '12px',
//         colors: ['black'],
//       },
//       // formatter: function (val, opt) {
//       //   return showData![idx++];
//       // },
//     },
//     // stroke: {
//     //   width: 1,
//     //   // curve: 'smooth',
//     //   curve: 'straight',
//     // },
//     fill: {
//       type: 'solid',
//       opacity: 1,
//     },
//     stroke: {
//       width: 1.5,
//       // curve: 'smooth',
//       curve: 'straight',
//     },
//     responsive: [
//       {
//         /**
//          * 480 픽셀 미만일때 반응형으로 하는옵션
//          * 넓이를 200으로 조정하고 범례의 위치를 bottom으로 조정한다
//          * */
//         breakpoint: 3000,
//         options: {
//           chart: {
//             // width: 200,
//           },
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     ],
//   };

//   const series: ApexAxisChartSeries = [
//     {
//       name: '건',
//       data: dataGun,
//     },
//     {
//       name: '곤',
//       data: dataGon,
//     },
//     {
//       name: '감',
//       data: dataGam,
//     },
//     {
//       name: '리',
//       data: dataLee,
//     },
//   ];

//   return (
//     <ReactApexChart
//       options={options}
//       width="100%"
//       height="100%"
//       series={series}
//       type="line"
//     />
//   );
// };

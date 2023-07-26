export const defaultOptions: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    // events: {
    //   mounted: (chart) => {
    //     chart.windowResizeHandler();
    //   },
    // },
    // redrawOnParentResize: true,
    // redrawOnWindowResize: true,
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 0.9,
      },
    },
    active: {
      filter: {
        type: 'darken',
        value: 0.8,
      },
    },
  },
  legend: {
    onItemClick: {
      toggleDataSeries: false,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
};

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
        type: 'lighten',
        value: 0.02,
      },
    },
    active: {
      filter: {
        type: 'darken',
        value: 0.98,
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

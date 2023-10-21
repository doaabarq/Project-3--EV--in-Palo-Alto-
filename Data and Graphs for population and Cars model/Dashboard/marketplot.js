// Data
let data = {
  population: {
    2010: 64535,
    2011: 65345,
    2012: 66089,
    2013: 66613,
    2014: 66848,
    2015: 66782,
    2016: 67353,
    2017: 66960,
    2018: 66258,
    2019: 65364,
    2020: 68385,
    2021: 66735,
    2022: 66010
  },
  bev: {
    2010: 28,
    2011: 115,
    2012: 176,
    2013: 583,
    2014: 890,
    2015: 1467,
    2016: 1859,
    2017: 2149,
    2018: 3002,
    2019: 3543,
    2020: 3881,
    2021: 4594,
    2022: 5652
  },
  gasoline: {
    2010: 56132,
    2011: 55851,
    2012: 55836,
    2013: 56947,
    2014: 57099,
    2015: 56940,
    2016: 57997,
    2017: 63773,
    2018: 62884,
    2019: 61612,
    2020: 57610,
    2021: 57534,
    2022: 55209
  },
  marketshare: {
    "EVs Total 2022": 5652,
    "Gasoline Total 2022": 55209
  },
  co2Emissions: {
    "Electric": 2175,
    "Hybrid": 4397,
    "Gasoline": 12574
  }
};

function createLineChart() {
  let population = Object.values(data.population);
  let years = Object.keys(data.population);

  let lineData = [{
    x: years,
    y: population,
    type: "line"
  }];

  let lineLayout = {
    title: "Population Over Time",
    xaxis: {
      title: "Year"
    },
    yaxis: {
      title: "Population"
    }
  };

  Plotly.newPlot("line-chart", lineData, lineLayout);
}

function createBarChart() {
  let bev = Object.values(data.bev);
  let gasoline = Object.values(data.gasoline);
  let years = Object.keys(data.bev);

  let barData = [{
    x: years,
    y: bev,
    name: "BEV"
  }, {
    x: years,
    y: gasoline,
    name: "Gasoline"
  }];

  let barLayout = {
    title: "BEV vs. Gasoline Sales",
    xaxis: {
      title: "Year"
    },
    yaxis: {
      title: "Sales"
    },
    barmode: "group"
  };

  Plotly.newPlot("bar-chart", barData, barLayout);
}

function createPieChart() {
  let marketshare = Object.values(data.marketshare);
  let marketshareLabels = Object.keys(data.marketshare);

  let pieData = [{
    values: marketshare,
    labels: marketshareLabels,
    type: "pie"
  }];

  let pieLayout = {
    title: "Market Share",
  };

  Plotly.newPlot("pie-chart", pieData, pieLayout);
}

function createCo2EmissionsChart() {
  let co2Emissions = Object.values(data.co2Emissions);
  let vehicleTypes = Object.keys(data.co2Emissions);

  let co2EmissionsData = [{
    x: vehicleTypes,
    y: co2Emissions,
    type: "bar"
  }];

  let co2EmissionsLayout = {
    title: "Annual Emissions per Vehicle",
    xaxis: {
      title: "Vehicle Type"
    },
    yaxis: {
      title: "CO2 Emissions"
    }
  };

  Plotly.newPlot("co2-emissions-chart", co2EmissionsData, co2EmissionsLayout);
}

function init() {
  createLineChart();
  createBarChart();
  createPieChart();
  createCo2EmissionsChart();
}

init();


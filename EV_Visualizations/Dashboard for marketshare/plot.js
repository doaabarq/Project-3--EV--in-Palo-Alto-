let bev = Object.values(data.bev);
let gasoline = Object.values(data.gasoline);
let population = Object.values(data.population);
let marketshare = Object.values(data.marketshare);

let labels = Object.keys(data.bev);


function init() {
  let data = [{
    values: bev,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

d3.selectAll("#selDataset").on("change", getData);

function getData() {
  let dropdownMenu = d3.select("#selDataset");

  let dataset = dropdownMenu.property("value");

  let data = [];

  if (dataset == "bev") {
      data = bev;
  }
  else if (dataset == "gasoline") {
       data = gasoline;
  }
  else if (dataset == "population") {
         data = population;
}
  else if (dataset == "marketshare") {
           data = marketshare;
}
  updatePlotly(data);
}

function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();



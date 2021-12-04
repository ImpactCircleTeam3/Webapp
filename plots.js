function buildPlot() {
    /* data route */
  var url = "/api";
  d3.json(url).then(function(response) {

    console.log(response);

    var data = [response];

    var layout = {
      title: "Trigrams Frequencies",
      xaxis: {
        title: "Trigrams"
      },
      yaxis: {
        title: "Count"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

var fg_1 = "FirstGraph.json";
vegaEmbed("#FIRSTGRAPH", fg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var fg_2 = "Latlongchart.json";
vegaEmbed("#SECONDGRAPH", fg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

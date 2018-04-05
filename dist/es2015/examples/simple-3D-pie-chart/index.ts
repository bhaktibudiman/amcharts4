import * as amcharts4 from "@amcharts/amcharts4";
import * as pie3d from "@amcharts/amcharts4/pie3d";
import AnimatedTheme from "@amcharts/amcharts4/themes/animated";


amcharts4.useTheme(AnimatedTheme);

let chart = amcharts4.create("chartdiv", pie3d.PieChart3D);

chart.legend = new pie3d.Legend();

chart.data = [{
	"country": "Lithuania",
	"litres": 501.9
}, {
	"country": "Czech Republic",
	"litres": 301.9
}, {
	"country": "Ireland",
	"litres": 201.1
}, {
	"country": "Germany",
	"litres": 165.8
}, {
	"country": "Australia",
	"litres": 139.9
}, {
	"country": "Austria",
	"litres": 128.3
}, {
	"country": "UK",
	"litres": 99
}, {
	"country": "Belgium",
	"litres": 60
}, {
	"country": "The Netherlands",
	"litres": 50
}];

chart.innerRadius = amcharts4.percent(40);

let series = chart.series.push(new pie3d.PieSeries3D());
series.dataFields.value = "litres";
series.dataFields.category = "country";
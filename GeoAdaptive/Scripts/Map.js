/*global dojo,esri,GeoAdaptive*/
/// <reference path="knockout-2.2.0.debug.js" 
/// <reference path="Main.js" />
/// <reference path="Legend.js" />
/// <reference path="Basemaps.js" />

dojo.require("esri.map");

GeoAdaptive.Map = (function () {
    var ctor = function (mapDiv, legendDiv, basemapsDiv) {
        var self, map, legend, basemaps, usaLayerImageParameters, usaLayerUrl, usaLayer;
        self = this;
        map = new esri.Map(mapDiv, {
            center: [-56.049, 38.485],
            zoom: 3,
            basemap: "topo"
        });
        dojo.connect(map, "onLayersAddResult", function (layers) {
            legend = new GeoAdaptive.Legend(legendDiv, map, layers);
        });
        basemaps = new GeoAdaptive.Basemaps(basemapsDiv, map);
        usaLayerImageParameters = new esri.layers.ImageParameters();
        usaLayerImageParameters.layerIds = [0, 1];
        usaLayerImageParameters.layerOption = esri.layers.ImageParameters.LAYER_OPTION_SHOW;
        usaLayerUrl = "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer";
        usaLayer = new esri.layers.ArcGISDynamicMapServiceLayer(usaLayerUrl, {
            "imageParameters": usaLayerImageParameters
        });
        map.addLayers([usaLayer]);

        self.resize = function () {
            map.resize();
            map.reposition();
        };
    };
    return ctor;
}());
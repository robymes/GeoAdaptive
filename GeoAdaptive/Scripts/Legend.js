/*global dojo,esri,GeoAdaptive*/
/// <reference path="knockout-2.2.0.debug.js" 
/// <reference path="Main.js" />

dojo.require("esri.dijit.Legend");

GeoAdaptive.Legend = (function () {    
    var ctor = function (legendDiv, map, layers) {
        var self, legend, layerInfo;
        self = this;
        layerInfo = dojo.map(layers, function (layer) {
            return {
                layer: layer.layer,
                title: layer.layer.name
            };
        });
        if (layerInfo.length > 0) {
            legend = new esri.dijit.Legend({
                map: map,
                layerInfos: layerInfo
            }, legendDiv);
            legend.startup();
        }
    };
    return ctor;
}());
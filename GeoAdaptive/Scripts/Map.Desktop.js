/*global dojo,esri,jQuery,GeoAdaptive*/
/// <reference path="Main.js" />
/// <reference path="Map.js" />

GeoAdaptive.MapViewModel = (function () {
    var ctor = function (mapDiv, legendDiv, basemapsDiv) {
        var self, map;
        self = this;
        map = new GeoAdaptive.Map(mapDiv, legendDiv, basemapsDiv);
    };
    return ctor;
}());

(function () {
    var mapViewModel;
    dojo.ready(function () {
        jQuery("#tocTabs").tabs();
        mapViewModel = new GeoAdaptive.MapViewModel("mapDiv", "legendDiv", "basemapsDiv");
    });
}());
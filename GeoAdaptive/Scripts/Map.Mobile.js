/*global dojo,esri,jQuery,GeoAdaptive,window*/
/// <reference path="Main.js" />
/// <reference path="Map.js" />

GeoAdaptive.MapViewModel = (function () {
    var ctor = function (mapDiv, legendDiv, basemapsDiv) {
        var self, map;
        self = this;
        map = new GeoAdaptive.Map(mapDiv, legendDiv, basemapsDiv);

        self.resize = function () {
            map.resize();
        };
    };
    return ctor;
}());

(function () {
    var mapViewModel, supportsOrientationChange, orientationEvent, resize;
    resize = function () {
        jQuery("#mapDiv").css("height", window.innerHeight - jQuery("#footerBar").outerHeight(true) -
            jQuery("#headerBar").outerHeight(true));
        jQuery("#mapDiv").css("width", "auto");
        mapViewModel.resize();
    };
    dojo.ready(function () {
        mapViewModel = new GeoAdaptive.MapViewModel("mapDiv", "legendDiv", "basemapsDiv");
        jQuery("#mapPage").height(jQuery(window).height());
        resize();
        supportsOrientationChange = window.hasOwnProperty("onorientationchange");
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
        window.addEventListener(orientationEvent, function () {
            resize();
        }, false);
    });
}());
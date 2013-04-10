/*global dojo,esri,GeoAdaptive*/
/// <reference path="knockout-2.2.0.debug.js" 
/// <reference path="Main.js" />

dojo.require("esri.dijit.BasemapGallery");

GeoAdaptive.Basemaps = (function () {
    var ctor = function (basemapsDiv, map) {
        var self, basemapsGallery;
        self = this;
        basemapsGallery = new esri.dijit.BasemapGallery({
            showArcGISBasemaps: true,
            map: map
        }, basemapsDiv);
        basemapsGallery.startup();
    };
    return ctor;
}());
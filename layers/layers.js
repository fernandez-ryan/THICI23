var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_WHOLEAREA_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "WHOLE AREA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WHOLEAREA_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13766682.021520, 1171430.309931, 13771092.940471, 1173770.664701]
                            })
                        });
var format_THICICONTOUR_2 = new ol.format.GeoJSON();
var features_THICICONTOUR_2 = format_THICICONTOUR_2.readFeatures(json_THICICONTOUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_THICICONTOUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THICICONTOUR_2.addFeatures(features_THICICONTOUR_2);
var lyr_THICICONTOUR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_THICICONTOUR_2, 
                style: style_THICICONTOUR_2,
                interactive: true,
    title: 'THICI CONTOUR<br />\
    <img src="styles/legend/THICICONTOUR_2_0.png" /> ACAD_ISO02W100<br />\
    <img src="styles/legend/THICICONTOUR_2_1.png" /> CONTINUOUS<br />\
    <img src="styles/legend/THICICONTOUR_2_2.png" /> <br />'
        });
var format_THICISOUNDINGS_3 = new ol.format.GeoJSON();
var features_THICISOUNDINGS_3 = format_THICISOUNDINGS_3.readFeatures(json_THICISOUNDINGS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_THICISOUNDINGS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THICISOUNDINGS_3.addFeatures(features_THICISOUNDINGS_3);
var lyr_THICISOUNDINGS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_THICISOUNDINGS_3, 
                style: style_THICISOUNDINGS_3,
                interactive: true,
                title: 'THICI SOUNDINGS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_WHOLEAREA_1.setVisible(true);lyr_THICICONTOUR_2.setVisible(true);lyr_THICISOUNDINGS_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WHOLEAREA_1,lyr_THICICONTOUR_2,lyr_THICISOUNDINGS_3];
lyr_THICICONTOUR_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_THICISOUNDINGS_3.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'DEPTH': 'DEPTH', 'DEPTH_1': 'DEPTH_1', });
lyr_THICICONTOUR_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_THICISOUNDINGS_3.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'DEPTH': 'TextEdit', 'DEPTH_1': 'TextEdit', });
lyr_THICICONTOUR_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_THICISOUNDINGS_3.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'DEPTH': 'no label', 'DEPTH_1': 'no label', });
lyr_THICISOUNDINGS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
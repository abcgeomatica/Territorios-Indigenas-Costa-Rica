var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Territorios_Indigenasshp_1 = new ol.format.GeoJSON();
var features_Territorios_Indigenasshp_1 = format_Territorios_Indigenasshp_1.readFeatures(json_Territorios_Indigenasshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territorios_Indigenasshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Territorios_Indigenasshp_1.addFeatures(features_Territorios_Indigenasshp_1);
var lyr_Territorios_Indigenasshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Territorios_Indigenasshp_1, 
                style: style_Territorios_Indigenasshp_1,
                popuplayertitle: "Territorios_Indigenas.shp",
                interactive: true,
    title: 'Territorios_Indigenas.shp<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_0.png" /> BORUCA<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_1.png" /> BRIBRI<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_2.png" /> CABECAR<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_3.png" /> CHOROTEGA<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_4.png" /> GUAYMI<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_5.png" /> HUETAR<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_6.png" /> MALEKUS<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_7.png" /> NGOBES<br />\
    <img src="styles/legend/Territorios_Indigenasshp_1_8.png" /> TERRABA<br />'
        });

lyr_googlesatellitehybrid_0.setVisible(true);lyr_Territorios_Indigenasshp_1.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_Territorios_Indigenasshp_1];
lyr_Territorios_Indigenasshp_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'AREA_OFI': 'AREA_OFI', 'PUEBLO': 'PUEBLO', 'POBLACIóN': 'POBLACIóN', 'DECR_CREAC': 'DECR_CREAC', 'DECRE_DELI': 'DECRE_DELI', 'HOJA_CARTG': 'HOJA_CARTG', 'POBLADOS': 'POBLADOS', 'REPRE_LEGA': 'REPRE_LEGA', });
lyr_Territorios_Indigenasshp_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'AREA_OFI': 'TextEdit', 'PUEBLO': 'TextEdit', 'POBLACIóN': 'TextEdit', 'DECR_CREAC': 'TextEdit', 'DECRE_DELI': 'TextEdit', 'HOJA_CARTG': 'TextEdit', 'POBLADOS': 'TextEdit', 'REPRE_LEGA': 'TextEdit', });
lyr_Territorios_Indigenasshp_1.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'AREA_OFI': 'inline label - always visible', 'PUEBLO': 'inline label - always visible', 'POBLACIóN': 'inline label - always visible', 'DECR_CREAC': 'inline label - always visible', 'DECRE_DELI': 'inline label - always visible', 'HOJA_CARTG': 'inline label - always visible', 'POBLADOS': 'inline label - always visible', 'REPRE_LEGA': 'inline label - always visible', });
lyr_Territorios_Indigenasshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
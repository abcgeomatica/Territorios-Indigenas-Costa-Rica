// Cargar poligonos de territorios indigenas
var table = ee.FeatureCollection("projects/ee-abcgeomaticaagricola/assets/Territorios_Indigenas");

// Descripcion del etiquetado de elementos de la leyenda
var Etiquetas = [
  'BORUCA',
  'BRIBRI',
  'CABECAR',
  'CHOROTEGA',
  'GUAYMI',
  'HUETAR',
  'MALEKUS',
  'NÖGOES',
  'TERRABA',
    ];

// Configuracion del titulo y posicion de la leyenda
var Titulo = ui.Label({
  value: 'Territorios Indigenas', // Titulo de la leyenda
  style: {fontWeight: 'bold', fontSize: '13px', margin: '0px 0px 10px 0px',}}); // Estilo y dimensiones
var Leyenda = ui.Panel({
  style: {position: 'bottom-left', padding: '2px 3px'}}); // Posicion, altura y anchura
Leyenda.add(Titulo);

// Configuracion de la simbologia
var Simbologia = ['00FF00', 'Ffff00', 'FF0000','Ff6600','FF00FF','0000FF','B2FFFF','8ae82c' , 'dd9373'];
var Simbolos = function(simbolo, texto) {
var TextoLeyenda = ui.Label({
  value: texto,
  style: {margin: '3px 0px 2px 3px'}}); // Posicion en la separacion de los textos
var CajaLeyenda = ui.Label({
  style: {backgroundColor: '#' + simbolo,
  padding: '8px', // TamaÃ±o del simbolo
  margin: '0px 0px 2px 0px'}}); // Posicion en la separacion de los simbolos

//Representacion de leyenda en el visor
return ui.Panel({
  widgets: [CajaLeyenda, TextoLeyenda],
  layout: ui.Panel.Layout.Flow('horizontal')});};
for (var i = 0; i < 9; i++) {Leyenda.add(Simbolos(Simbologia[i], Etiquetas[i]));} 

Map.add(Leyenda);


// Colorear poligonos de territorios
var colorTable = ee.Dictionary({
  'BORUCA': '00FF00',
  'BRIBRI': 'Ffff00',
  'CABECAR': 'FF0000',
  'CHOROTEGA': 'Ff6600',
  'GUAYMI': 'FF00FF',
  'HUETAR': '0000FF',
  'MALEKUS': 'B2FFFF',
  'NGOBES': '8ae82c',
  'TERRABA': 'dd9373',
  });

var styled = table
  .map(function (feature) {
    return feature.set('style', {
      fillColor: colorTable.get(feature.get('PUEBLO'), '777777')
    });
  })
  .style({
    styleProperty: 'style',
  });

//Visualizar mapa
Map.centerObject(table, 8);

Map.addLayer(styled,{opacity:0.8},'Territorios Indigenas');


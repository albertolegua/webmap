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
var lyr_huancavelica_provincias_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://127.0.0.1:8080/geoserver/bdespacial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "huancavelica_provincias",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "huancavelica_provincias",
                            opacity: 0.667000,
                            
                            
                          });
              wms_layers.push([lyr_huancavelica_provincias_1, 0]);
var lyr_huancavelica_ccpp_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://127.0.0.1:8080/geoserver/bdespacial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "huancavelica_ccpp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "huancavelica_ccpp",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_huancavelica_ccpp_2, 0]);

lyr_GoogleSatellite_0.setVisible(true);lyr_huancavelica_provincias_1.setVisible(true);lyr_huancavelica_ccpp_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_huancavelica_provincias_1,lyr_huancavelica_ccpp_2];

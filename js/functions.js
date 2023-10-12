window.onload = function(){
    var map;
    function initialize(){
        var propriedades_mapa = {
            center: new google.maps.LatLng(0, 0),
            scrollWheel: false,
            zoom: 12
        }
        map = new google.maps.Map(document.getElementById("gps"), propriedades_mapa);
    }

    initialize();
}
var lat, lon, fecha, hora, mensaj, poli;
let map = L.map('mapid').setView([10.99304, -74.82814], 13);
const tileurl2 = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(tileurl2).addTo(map);
marcador = L.marker([0, 0]);
marcador.addTo(map);

function actual() {
    fetch("/datos").then(res => {
        return res.json()
    }).then(data => {
        mensaje = data;
        console.log(mensaje);
        lon = mensaje.longitud;
        lat = mensaje.latitud;
        hora = mensaje.hora;
        fecha = mensaje.fecha;
        let newLatLng = new L.LatLng(lat, lon);
        marcador.setLatLng(newLatLng);
        map.setView(newLatLng)

        document.getElementsByClassName("lat")[0].innerHTML = lat;
        document.getElementsByClassName("long")[0].innerHTML = lon;
        document.getElementsByClassName("date")[0].innerHTML = fecha;
        document.getElementsByClassName("hour")[0].innerHTML = hora;
        if (!poli) {
            poli = L.polyline([{ lat: lat, lon: lon }]).addTo(map);
        }
        poli.addLatLng(newLatLng);
    });
}

let actualizar_datos = setInterval(actual, 1000);
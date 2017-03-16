//JS - Geolocation

var x = document.getElementById("coordinates");
var s = document.getElementById("state");

function TestGeo() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition( TestMap, error, {maximumAge: 1000, timeout: 10000, enableHighAccuracy: true});
  }
  else {
    x.innerHTML = "Geolocation is not supported by this browser."
  }
}

function TestMap(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  x.innerHTML = "Lattitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude +
                "<br>Accuracy: " + position.coords.accuracy;

  if (latitude >= 50 && longitude <= 0 ){
    s.innerHTML = "Good coordinates";
    document.getElementById('audiotag1').controls = "controls";
  }
}

function error() {
  x.innerHTML = "Cannot locate user."
}

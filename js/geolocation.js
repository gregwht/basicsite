//JS - Geolocation

var x = document.getElementById("coordinates");

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
    alert("Good coordinates");
    play_single_sound();
  }
}

function error() {
  x.innerHTML = "Cannot locate user."
}

// Sound testing

function play_single_sound(){

  document.getElementById('audiotag1').play();
}

'use strict';

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    const map = L.map('map').setView(coords, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on('click', function (mapEvent) {
      const { lat, lng } = mapEvent.latlng;
      L.marker([lat, lng]).addTo(map).bindPopup('Workout').openPopup();
    });
  },
  function () {
    alert('Could not get your position');
  }
);

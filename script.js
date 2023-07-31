'use strict';

// prettier-ignore
// Stored Data
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class App {
  constructor()

  _getPosition() {
    // Geolocation API
    if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(this._loadMap, function () {
    alert('Could not get your position')
     })
  }

  _loadMap(position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 15);

      //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //     attribution:
      //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      //   }).addTo(map);

      // Map layer
      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }).addTo(map);

      // Clicks on map function
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
   }

  _showForm(){}

  _toggleElevationField(){}

  _newWorkout(){}

}

const app = new App();
app._getPosition();


// Marker function
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(mapEvent);

  // Clear Input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Displaying marker function
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

// Toggling between Workout type (clycing = elevation , Running = cadence)
inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

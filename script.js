'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let passengersBoarded = 18;

// if (passengersBoarded <= 10) {
//   passengersBoarded += 10;
// } else {
//   passengersBoarded -= passengersBoarded - 10;
// }

// for (let i = 0; i < 5; i++) {
//     console.log('Oh hey!');
// }

// const passengers = [
//     'Will Alexander',
//     'Sarah Kate',
//     'Audrey Simon',
//     'Tau Perkington'
// ];

// let passengersBoarded = 10;

// for (let i in passengers) {
//     passengersBoarded++;
// }

// console.log(passengersBoarded);

// const guests = [
//   {
//     name: 'Will Alexander',
//     vip: false,
//   },
//   {
//     name: 'Sarah Kate',
//     vip: true,
//   },
//   {
//     name: 'Audrey Simon',
//     vip: true,
//   },
//   {
//     name: 'Tau Perkington',
//     vip: false,
//   },
// ];

// let vips = 0;
// let normies = 0;

// for (let guest of guests) {
//   if (guest.vip) {
//     vips++;
//   }
// }

// console.log(vips);

// let guestsSeated = 5;

// let seatsRemaining = 10;
// let guestsRemaining = 7;

// while (seatsRemaining > 0 && guestsRemaining > 0) {
//     guestsSeated++;
//     seatsRemaining--;
//     guestsRemaining--;
// }

// console.log(guestsSeated);

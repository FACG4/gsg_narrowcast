/* eslint-disable no-undef */
const viewEvents = select('#view-events');
const programs = select('#programs');


viewEvents.addEventListener('click', () => {
  fetch('/events')
    .then(() => {
      window.location = '/events';
    })
    .catch((err) => {
      console.log(err);
    });
});

programs.addEventListener('click', () => {
  fetch('/programs')
    .then(() => {
      window.location = '/programs';
    })
    .catch((err) => {
      console.log(err);
    });
});

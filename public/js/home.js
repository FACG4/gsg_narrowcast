/* eslint-disable no-undef */
const viewEvents = select('#view-events');


viewEvents.addEventListener('click', () => {
  fetch('/events')
    .then(() => {
      window.location = '/events';
    })
    .catch();
});

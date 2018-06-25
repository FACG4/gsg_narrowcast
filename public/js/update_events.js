/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const add = select('#add-events');
const ss = select('#ss');

add.addEventListener('click', (e) => {
  e.preventDefault();
  const path = location.pathname.split('/')[2];
  fetch(`/update-event/${path}`, {
    method: 'POST',
  }).then(res => res.json())
    .then((result) => {
      ss.textContent = result.message;
    })
    .catch();
});

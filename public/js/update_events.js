/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const add = select('#add-events');
const ss = select('#ss');


add.addEventListener('click', (e) => {
  e.preventDefault();
  const requestBody = {
    startDate: select('#start-date').value,
    endDate: select('#end-date').value,
    title: select('#title').value,
    hall: select('#hall').value,
    speaker: select('#speaker').value,
    imageUrl: select('#image-url').value,
    descriptionTitle: select('#description-title').value,
    DescriptionText: select('#description-text').value,
  };
  console.log(requestBody);
  const path = location.pathname.split('/')[2];
  fetch(`/update-event/${path}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(res => res.json())
    .then((result) => {
      ss.textContent = result.message;
    })
    .catch(err => console.log('error', err));
});

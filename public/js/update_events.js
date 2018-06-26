/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const update = select('#update-events');
const message = select('#message');


update.addEventListener('click', (e) => {
  e.preventDefault();
  const requestBody = {
    startDate: select('#start-date').value.concat('T').concat(select('#start-time').value),
    endDate: select('#end-date').value.concat('T').concat(select('#end-time').value),
    title: select('#title').value,
    hall: select('#hall').value,
    speaker: select('#speaker').value,
    imageUrl: select('#image-url').value,
    descriptionTitle: select('#description-title').value,
    DescriptionText: select('#description-text').value,
  };
  const path = location.pathname.split('/')[2];
  fetch(`/update-event/${path}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(res => res.json())
    .then(result => message.textContent = result.message)
    .catch(() => {
      message.textContent = 'There has been a network error';
    });
});

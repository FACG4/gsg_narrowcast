/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const add = select('#add-events');
const message = select('#message');


add.addEventListener('click', (e) => {
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
    .then((result) => {
      console.log(result);
      message.textContent = result.message;
    })
    .catch(err => ss.textContent = 'There has been a network error');
});

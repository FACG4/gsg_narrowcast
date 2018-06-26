/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const add = select('#add-events');
const message = select('#message');


add.addEventListener('click', (e) => {
  e.preventDefault();
  const startTime = select('#start-time').value;
  const endTime = select('#end-time').value;
  console.log(startTime);
  const requestBody = {
    startDate: select('#start-date').value.concat('T').concat(startTime),
    endDate: select('#end-date').value.concat('T').concat(endTime),
    title: select('#title').value,
    hall: select('#hall').value,
    speaker: select('#speaker').value,
    imageUrl: select('#image-url').value,
    descriptionTitle: select('#description-title').value,
    DescriptionText: select('#description-text').value,
  };
  console.log(requestBody.startDate);
  fetch(`/add-event`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(res => res.json())
    .then(res => message.textContent = res.message)
    .catch((err) => {
      if (!startTime || !endTime) {
        message.textContent = 'Please set the start and end time of the event';
      }
    });
});

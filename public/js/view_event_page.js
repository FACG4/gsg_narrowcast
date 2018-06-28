/* global document fetch swal window */
const del = document.querySelectorAll('.deleteBtn');
const monthArray = document.querySelectorAll('.month');
const dayArray = document.querySelectorAll('.day');
const startTimeArray = document.querySelectorAll('.start-time');
const hiddenDate = document.querySelectorAll('.hidden-date');
const hiddenTitle = document.querySelectorAll('.hidden-thing');
const hiddenDescription = document.querySelectorAll('.hidden-thing');
const mainTitle = document.querySelectorAll('.main-title');
const mainDescription = document.querySelectorAll('.main-description');
const hiddenSpeaker = document.querySelectorAll('.hidden-speaker');
const speaker = document.querySelectorAll('.speaker');
const timeStamp = document.querySelectorAll('.timestamp');
const hiddenEnd = document.querySelectorAll('.hidden-end');
const hoursSpan = document.querySelectorAll('.hours-span');
const minutesSpan = document.querySelectorAll('.minutes-span');
const secondsSpan = document.querySelectorAll('.seconds-span');

del.forEach((item) => {
  item.addEventListener('click', () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this event!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      value: 'catch',
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`/deleteEvents/${item.id}`, {
            method: 'GET',
          }).then(res => res.json()).then((res) => {
            swal(res.message, {
              icon: 'success',
            }).then(() => {
              window.location = '/viewEvents';
            });
          });
        }
      });


  });
});


const myCountdown = hiddenDate[0].textContent;
const newDate = new Date(myCountdown).toISOString();
let remainingTime = (new Date(newDate).getTime()/1000) - (Date.now()/1000);


setInterval(() => {
  if (remainingTime > 0) {
    remainingTime -=1;
    console.log(remainingTime);
  }
  const remainingSeconds = Math.floor(remainingTime%3600%60)
  const hours = Math.floor(remainingTime/3600);
  const minutes = Math.floor(remainingTime%3600/60);
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = remainingSeconds;
}, 1000);


const startTime = hiddenDate[0].textContent.split(' ')[4].split(':').slice(0, 2).join(':');
const endTime = hiddenEnd[0].textContent.split(' ')[4].split(':').slice(0, 2).join(':');
timeStamp.textContent = `${startTime} - ${endTime}`;
// mainTitle.textContent = 'Upcoming Event: ' + hiddenTitle[0].textContent;
// mainDescription.textContent = hiddenDescription[0].textContent;
speaker.textContent = hiddenSpeaker.textContent;

for (let i = 0; i < monthArray.length; i++) {
  monthArray[i].textContent = hiddenDate[i].textContent.split(' ')[1];
};

for (let i = 0; i < dayArray.length; i++) {
  dayArray[i].textContent = hiddenDate[i].textContent.split(' ')[2];
};


for (let i = 0; i < startTimeArray.length; i++) {
  if (hiddenDate[i].textContent.split(' ')[4].split(':')[0] > 12) {
    const time = hiddenDate[i].textContent.split(' ')[4].split(':')[0] - 12;
    startTimeArray[i].textContent = time + ':' + (hiddenDate[i].textContent.split(' ')[4].split(':')[1]) + ' PM';
  }
  else if (hiddenDate[i].textContent.split(' ')[4].split(':')[0] < 12) {
    startTimeArray[i].textContent = hiddenDate[i].textContent.split(' ')[4].split(':').slice(0, 2).join(':') + ' AM';
  }
};

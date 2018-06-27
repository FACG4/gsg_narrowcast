/* global select selectAll */
const monthArray = selectAll('.month');
const dayArray = selectAll('.day');
const startTimeArray = selectAll('.start-time');
const hiddenDate = selectAll('.hidden-date');
const hiddenTitle = selectAll('.hidden-thing');
const hiddenDescription = selectAll('.hidden-thing');
const mainTitle = select('.main-title');
const mainDescription = select('.main-description');
const hiddenSpeaker = select('.hidden-speaker');
const speaker = select('.speaker');
const timeStamp = select('.timestamp');
const hiddenEnd = select('.hidden-end');
const hoursSpan = select('.hours-span');
const minutesSpan = select('.minutes-span');
const secondsSpan = select('.seconds-span');

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
const endTime = hiddenEnd.textContent.split(' ')[4].split(':').slice(0, 2).join(':');
timeStamp.textContent = `${startTime} - ${endTime}`;
mainTitle.textContent = 'Upcoming Event: ' + hiddenTitle[0].textContent;
mainDescription.textContent = hiddenDescription[0].textContent;
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

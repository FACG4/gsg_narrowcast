/* global window fetch selectAll */

const deleteEvent = selectAll('.delete');
const editEvent = selectAll('.edit');
const viewEvent = selectAll('.view');

deleteEvent.forEach((deleteButton) => {
  deleteButton.addEventListener('click', () => {
    const id = deleteButton.id.split('-')[1];
    fetch(`/delete-event/${id}`)
      .then(() => {
        window.location = `/delete-event/${id}`;
        console.log(id);
      })
      .catch(err => console.log(err));
  });
});

editEvent.forEach((editButton) => {
  editButton.addEventListener('click', () => {
    const id = editButton.id.split('-')[1];
    fetch(`/update-event/${id}`)
      .then(() => {
        window.location = `/update-event/${id}`;
      })
      .catch(err => console.log(err));
  });
});

viewEvent.forEach((viewButton) => {
  viewButton.addEventListener('click', () => {
    const id = viewButton.id.split('-')[1];
    fetch(`/view-single/${id}`)
      .then(() => {
        window.location = `/view-single/${id}`;
      })
      .catch(err => console.log(err));
  });
});

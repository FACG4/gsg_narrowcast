/* global document fetch swal window */
const del = document.querySelectorAll('.deleteBtn');

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

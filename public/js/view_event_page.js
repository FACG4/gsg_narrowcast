const del = document.querySelectorAll('.deleteBtn');
// const vie = document.querySelectorAll('.viewBtn');
// const edi = document.querySelectorAll('.editBtn');

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
        console.log(willDelete);
        if (willDelete) {
          fetch(`/deleteEvents/${item.id}`, {
            method: 'GET',
          }).then(res => res.json()).then(res => {
            console.log(res.message);
            swal(res.message, {
              icon: "success",
            }).then(res => {
              window.location = '/viewEvents'
            });
          });
        }
      })


  });
});


// vie.forEach((item) => {
//   item.addEventListener('click', () => {
//     fetch(`/view/${item.id}`, {
//       method: 'GET',
//     }).then(res=>{
//         window.location='/home'
//       });
//     });
//   });

// edi.forEach((item) => {
//   item.addEventListener('click', () => {
//     fetch(`/view/${item.id}`, {
//       method: 'GET',
//     }).then(res=>{
//         window.location='/home'
//       });
//     });
//   });

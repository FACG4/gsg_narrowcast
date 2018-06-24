fetch('/events', {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: data,
  })
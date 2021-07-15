const baseUrl = 'https://60e588bc5bcbca001749ed5c.mockapi.io/events';

export const getEvents = () => {
  return fetch(baseUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error("Internal Server Error. Can't display events");
      }
      return res.json();
    })
    .then(events =>
      events.map(({ id, dateFrom, dateTo, ...rest }) => ({
        id: id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...rest,
      })),
    );
};

export const createEvent = events =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(events),
  });

export const deleteEvents = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};

const API_KEY = 'a6be694f222c3e5ee8f11ab1c626bd00';

export const OTHER_ACTION = 'OTHER_ACTION';
export const otherAction = () => ({
  type: OTHER_ACTION
});

export const getTag = userInput => dispatch => {
  // dispatch(getHourlyForecastRequest());
  console.log('made it to the getTag action');
  fetch(
    `http://ws.audioscrobbler.com/2.0/?method=tag.getsimilar&tag=${userInput}&api_key=${API_KEY}&format=json`,
    {}
  )
    .then(res => {
      if (!res.ok) {
        console.log('bad response');
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log('succesful tag GET', data);
      // dispatch(getHourlyForecastSuccess(data.hourly_forecast));
    })

    .catch(err => {
      console.log('ended up in a error catch');
      // dispatch(getHourlyForecastError(err));
    });
};

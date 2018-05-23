var searchYouTube = ({key, query, max = 5}, callback) => {
  console.log('what is key?', key);
  console.log('what is query', query);
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      console.log('here are items', items);
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;

window.searchYouTube = searchYouTube;
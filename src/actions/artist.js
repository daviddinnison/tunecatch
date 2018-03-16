import { Actions } from 'react-native-router-flux';
const API_KEY = 'a6be694f222c3e5ee8f11ab1c626bd00';
const API_BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

export const GET_SIMILAR_ARTIST_REQUEST = 'GET_SIMILAR_ARTIST_REQUEST';
export const getSimilarArtistRequest = () => ({
  type: GET_SIMILAR_ARTIST_REQUEST
});

export const GET_SIMILAR_ARTIST_SUCCESS = 'GET_SIMILAR_ARTIST_SUCCESS';
export const getSimilarArtistSuccess = similarArtists => ({
  type: GET_SIMILAR_ARTIST_SUCCESS,
  similarArtists
});

export const GET_SIMILAR_ARTIST_ERROR = 'GET_SIMILAR_ARTIST_ERROR';
export const getSimilarArtistError = error => ({
  type: GET_SIMILAR_ARTIST_ERROR,
  error
});

export const SAVE_ORIGINAL_ARTIST = 'SAVE_ORIGINAL_ARTIST';
export const saveOriginalArtist = originalArtist => ({
  type: SAVE_ORIGINAL_ARTIST,
  originalArtist
});

export const getSimilarArtist = userInput => dispatch => {
  dispatch(getSimilarArtistRequest());
  const formattedInput = encodeURIComponent(userInput);
  console.log('similar ARTIST fetch is starting....', userInput);
  fetch(
    `${API_BASE_URL}?method=artist.getsimilar&artist=${formattedInput}&api_key=${API_KEY}&format=json`,
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
      if (data.message) {
        dispatch(getSimilarArtistError(data.message));
      } else {
        const formattedArtist = data.similarartists['@attr'].artist;

        dispatch(saveOriginalArtist(formattedArtist));
        dispatch(getSimilarArtistSuccess(data.similarartists.artist));
        dispatch(getTagComparison(formattedArtist));
        Actions.similarArtists();
      }
    })

    .catch(err => {
      console.log('ended up in a error catch', err);
      dispatch(getSimilarArtistError(err.message));
    });
};

export const GET_ARTIST_INFO_REQUEST = 'GET_ARTIST_INFO_REQUEST';
export const getArtistInfoRequest = () => ({
  type: GET_ARTIST_INFO_REQUEST
});

export const GET_ARTIST_INFO_SUCCESS = 'GET_ARTIST_INFO_SUCCESS';
export const getArtistInfoSuccess = artistInfo => ({
  type: GET_ARTIST_INFO_SUCCESS,
  artistInfo
});

export const getArtistInfo = userInput => dispatch => {
  dispatch(getArtistInfoRequest());
  const formattedInput = encodeURIComponent(userInput);
  fetch(
    `${API_BASE_URL}?method=artist.getInfo&artist=${formattedInput}&api_key=${API_KEY}&format=json`,
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
      dispatch(getArtistInfoSuccess(data.artist));
      dispatch(getTopAlbums(userInput));
      dispatch(getTopTracks(userInput));
    })

    .catch(err => {
      console.log('ended up in a error catch', err);
    });
};

export const GET_TAG_COMPARISON_SUCCESS = 'GET_TAG_COMPARISON_SUCCESS';
export const getTagComparisonSuccess = data => ({
  type: GET_TAG_COMPARISON_SUCCESS,
  data
});

export const getTagComparison = userInput => dispatch => {
  const formattedInput = encodeURIComponent(userInput);  
  fetch(
    `${API_BASE_URL}?method=artist.getinfo&artist=${formattedInput}&api_key=${API_KEY}&format=json`,
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
      dispatch(getTagComparisonSuccess(data.artist.tags));
    })

    .catch(err => {
      console.log('ended up in a error catch', err);
      // dispatch(getHourlyForecastError(err));
    });
};

export const GET_TOP_TRACKS_REQUEST = 'GET_TOP_TRACKS_REQUEST';
export const getTopTracksRequest = () => ({
  type: GET_TOP_TRACKS_REQUEST
});

export const GET_TOP_TRACKS_SUCCESS = 'GET_TOP_TRACKS_SUCCESS';
export const getTopTracksSuccess = data => ({
  type: GET_TOP_TRACKS_SUCCESS,
  data
});

export const getTopTracks = userInput => dispatch => {
  dispatch(getTopTracksRequest());
  const formattedInput = encodeURIComponent(userInput);  
  fetch(
    `${API_BASE_URL}?method=artist.gettoptracks&artist=${formattedInput}&api_key=${API_KEY}&format=json`,
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
      dispatch(getTopTracksSuccess(data.toptracks.track));
    })

    .catch(err => {
      console.log('ended up in a error catch', err);
      // dispatch(getHourlyForecastError(err));
    });
};

export const GET_TOP_ALBUMS_REQUEST = 'GET_TOP_ALBUMS_REQUEST';
export const getTopAlbumsRequest = () => ({ type: GET_TOP_ALBUMS_REQUEST });

export const GET_TOP_ALBUMS_SUCCESS = 'GET_TOP_ALBUMS_SUCCESS';
export const getTopAlbumsSuccess = data => ({
  type: GET_TOP_ALBUMS_SUCCESS,
  data
});

export const getTopAlbums = userInput => dispatch => {
  dispatch(getTopAlbumsRequest());
  const formattedInput = encodeURIComponent(userInput);
  fetch(
    `${API_BASE_URL}?method=artist.gettopalbums&artist=${formattedInput}&api_key=${API_KEY}&format=json`,
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
      dispatch(getTopAlbumsSuccess(data.topalbums.album));
    })

    .catch(err => {
      console.log('ended up in a error catch', err);
      // dispatch(getHourlyForecastError(err));
    });
};

//SINGLE ALBUM
export const GET_ALBUM_INFO_REQUEST = 'GET_ALBUM_INFO_REQUEST';
export const getAlbumInfoRequest = () => ({ type: GET_TOP_ALBUMS_REQUEST });

export const GET_ALBUM_INFO_SUCCESS = 'GET_ALBUM_INFO_SUCCESS';
export const getAlbumInfoSuccess = data => ({
  type: GET_ALBUM_INFO_SUCCESS,
  data
});

export const getAlbumInfo = (albumName, artistName) => dispatch => {
  const formattedAlbum = encodeURIComponent(albumName);
  const formattedArtist = encodeURIComponent(artistName);
  dispatch(getAlbumInfoRequest());
  const url = `${API_BASE_URL}?method=album.getinfo&api_key=${API_KEY}&artist=${formattedArtist}&album=${formattedAlbum}&format=json`;
  fetch(url, {})
    .then(res => {
      if (!res.ok) {
        console.log('bad response');
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(getAlbumInfoSuccess(data.album));
    })

    .catch(err => {
      console.log('ended up in a error catch', err);
      // dispatch(getHourlyForecastError(err));
    });
};

// TRACKS
export const GET_TRACK_INFO_REQUEST = 'GET_TRACK_INFO_REQUEST';
export const getTrackInfoRequest = () => ({ type: GET_TRACK_INFO_REQUEST });

export const GET_TRACK_INFO_SUCCESS = 'GET_TRACK_INFO_SUCCESS';
export const getTrackInfoSuccess = data => ({
  type: GET_TRACK_INFO_SUCCESS,
  data
});

export const GET_TRACK_INFO_ERROR = 'GET_TRACK_INFO_ERROR';
export const getTrackInfoError = error => ({
  type: GET_TRACK_INFO_ERROR,
  error
});

export const getTrackInfo = (trackName, artistName) => dispatch => {
  const formattedTrack = encodeURIComponent(trackName);
  const formattedArtist = encodeURIComponent(artistName);
  dispatch(getTrackInfoRequest());
  const url = `${API_BASE_URL}?method=track.getInfo&api_key=${API_KEY}&artist=${formattedArtist}&track=${formattedTrack}&format=json`;
  fetch(url, {})
    .then(res => {
      if (!res.ok) {
        console.log('bad response');
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      if (data.message) {
        dispatch(getTrackInfoError(data.message));
      } else {
        dispatch(getTrackInfoSuccess(data.track));
      }
    })

    .catch(err => {
      console.log('ended up in a error catch', err);
      dispatch(getTrackInfoError(err));
    });
};

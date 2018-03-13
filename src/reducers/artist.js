import {
  GET_SIMILAR_ARTIST_REQUEST,
  GET_SIMILAR_ARTIST_SUCCESS,
  GET_SIMILAR_ARTIST_ERROR,
  SAVE_ORIGINAL_ARTIST,
  GET_ARTIST_INFO_REQUEST,
  GET_ARTIST_INFO_SUCCESS,
  GET_TAG_COMPARISON_SUCCESS,
  GET_TOP_TRACKS_REQUEST,
  GET_TOP_TRACKS_SUCCESS,
  GET_TOP_ALBUMS_REQUEST,
  GET_TOP_ALBUMS_SUCCESS,
  GET_ALBUM_INFO_REQUEST,
  GET_ALBUM_INFO_SUCCESS,
  GET_TRACK_INFO_REQUEST,
  GET_TRACK_INFO_SUCCESS,
  GET_TRACK_INFO_ERROR
} from '../actions/artist';

const initialState = {
  baseComparisonTags: [],
  error: {
    initialSearch: '',
    singleTrack: ''
  },
  loading: {
    artistInfo: true,
    initialSearch: false,
    singleAlbum: true,
    singleTrack: true,
    topAblums: true,
    topTracks: true
  },
  orginalArtist: '',
  similarArtists: [],
  similarArtistInfo: {
    bio: {},
    tags: { tag: [{ name: '' }] },
    name: '',
    image: [['#text']]
  },
  similarArtistTopAlbums: [],
  similarArtistTopTracks: [{ name: '' }],
  singleAlbum: {
    tags: [],
    tracks: []
  },
  singleTrack: {
    album: { image: [] },
    artist: {},
    toptags: { tag: [] },
    wiki: {}
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SIMILAR_ARTIST_REQUEST': {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          initialSearch: true
        }
      });
    }
    case 'GET_SIMILAR_ARTIST_SUCCESS': {
      return Object.assign({}, state, {
        similarArtists: action.similarArtists,
        loading: {
          ...state.loading,
          initialSearch: false
        }
      });
    }
    case 'GET_SIMILAR_ARTIST_ERROR': {
      console.log('reucer error', action.error);
      return Object.assign({}, state, {
        error: {
          ...state.error,
          initialSearch: action.error
        },
        loading: {
          ...state.loading,
          initialSearch: false
        }
      });
    }
    case 'SAVE_ORIGINAL_ARTIST': {
      return Object.assign({}, state, {
        originalArtist: action.originalArtist
      });
    }
    case 'GET_ARTIST_INFO_REQUEST': {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          artistInfo: true
        }
      });
    }
    case 'GET_ARTIST_INFO_SUCCESS': {
      return Object.assign({}, state, {
        similarArtistInfo: action.artistInfo,
        loading: {
          ...state.loading,
          artistInfo: false
        }
      });
    }
    case 'GET_TAG_COMPARISON_SUCCESS': {
      return Object.assign({}, state, { baseComparisonTags: action.data });
    }
    case 'GET_TOP_TRACKS_REQUEST': {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          topTracks: true
        }
      });
    }
    case 'GET_TOP_TRACKS_SUCCESS': {
      return Object.assign({}, state, {
        similarArtistTopTracks: action.data,
        loading: {
          ...state.loading,
          topTracks: false
        }
      });
    }
    case 'GET_TOP_ALBUMS_REQUEST': {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          topAlbums: true
        }
      });
    }
    case 'GET_TOP_ALBUMS_SUCCESS': {
      return Object.assign({}, state, {
        similarArtistTopAlbums: action.data,
        loading: {
          ...state.loading,
          topAlbums: false
        }
      });
    }
    case 'GET_ALBUM_INFO_REQUEST': {
      return Object.assign({}, state, {
        loading: {
          ...state.loading,
          singleAlbum: true
        }
      });
    }
    case 'GET_ALBUM_INFO_SUCCESS': {
      return Object.assign({}, state, {
        singleAlbum: action.data,
        loading: {
          ...state.loading,
          singleAlbum: false
        }
      });
    }
    case 'GET_TRACK_INFO_REQUEST': {
      return Object.assign({}, state, {
        error: {
          ...state.loading,
          singleTrack: ''
        },
        loading: {
          ...state.loading,
          singleTrack: true
        }
      });
    }
    case 'GET_TRACK_INFO_SUCCESS': {
      return Object.assign({}, state, {
        singleTrack: action.data,
        loading: {
          ...state.loading,
          singleTrack: false
        }
      });
    }
    case 'GET_TRACK_INFO_ERROR': {
      console.log('reucer error', action.error);
      return Object.assign({}, state, {
        error: {
          ...state.error,
          singleTrack: action.error
        },
        loading: {
          ...state.loading,
          singleTrack: false
        }
      });
    }
    default:
      return state;
  }
}

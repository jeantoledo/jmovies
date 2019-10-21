import { SET_SEARCH_FILTER, SET_MOVIE_DETAILS, CLEAR_MOVIE_DETAILS } from './actionTypes';

const initialState = {
  search: '',
  movie: undefined,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_FILTER: {
      return Object.assign({}, state, {
        search: action.value
      })
    }
    case SET_MOVIE_DETAILS: {
      return Object.assign({}, state, {
        movie: action.value
      })
    }
    case CLEAR_MOVIE_DETAILS: {
      return Object.assign({}, state, {
        movie: undefined
      })
    }
    default:
      return state
  }
};

export default reducer;

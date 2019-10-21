import { SET_SEARCH_FILTER, SET_MOVIE_DETAILS, CLEAR_MOVIE_DETAILS } from './actionTypes';

export const setSearchFilter = value => {
  return { type: SET_SEARCH_FILTER, value }
};

export const setMovieDetails = value => {
  return { type: SET_MOVIE_DETAILS, value }
};

export const clearMovieDetails = () => {
  return { type: CLEAR_MOVIE_DETAILS };
};



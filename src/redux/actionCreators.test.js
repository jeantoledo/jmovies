import { SET_SEARCH_FILTER, SET_MOVIE_DETAILS, CLEAR_MOVIE_DETAILS } from './actionTypes';
import { setSearchFilter, setMovieDetails, clearMovieDetails } from './actionCreators';

it('setSearchFilter return the right action', () => {
  const action = setSearchFilter('teste');
  expect(action).toStrictEqual({ type: SET_SEARCH_FILTER, value: 'teste' });
});

it('setMovieDetails return the right action', () => {
  const action = setMovieDetails({ title: 'teste' });
  expect(action).toStrictEqual({ type: SET_MOVIE_DETAILS, value: { title: 'teste' } });
});

it('clearMovieDetails return the right action', () => {
  const action = clearMovieDetails();
  expect(action).toStrictEqual({ type: CLEAR_MOVIE_DETAILS });
});


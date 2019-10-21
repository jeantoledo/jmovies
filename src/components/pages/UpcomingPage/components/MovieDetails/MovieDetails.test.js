import React from 'react';
import renderer from 'react-test-renderer';
import { MovieDetails } from './index';

it('renders correctly', () => {
  const fakeMovie = {
    title: 'Fake Movie',
    backdrop_path: 'http://image.com/image.jpg',
    poster_path: 'http://image.com/image.jpg',
    release_date: '2019-10-08',
    genres: ['Action'],
    overview: 'test movie'
  };

  const tree = renderer
    .create(<MovieDetails movie={fakeMovie} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

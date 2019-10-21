import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MovieService from '../../../services/MovieService';
import MoviesList from './components/MoviesList';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

function UpcomingPage({ search }) {
  const service = new MovieService();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(function loadMovies() {
    const getUpcoming = async () => {
      if(loading === false) {
        setLoading(true);
        const response = await service.upcoming(page);
        setMovies(movies.concat(response.results));
        setLoading(false);
        setLoadMore(response.page < response.total_pages);
      }
    };

    getUpcoming();
  }, [page]);

  const regex = new RegExp(search, 'i');
  const filteredMovies = movies.filter(movie => movie.title.search(regex) !== -1);

  return (
    <>
      <MoviesList movies={filteredMovies} />

      <Box mt={2} textAlign="center">
        { loading ? <CircularProgress /> : null }

        { loadMore && loading === false && search === '' ?
          <Button variant="contained" color="primary" onClick={() => { setPage(page + 1); }}>
            Load More
          </Button>
          : null
        }
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(
  mapStateToProps,
)(UpcomingPage);

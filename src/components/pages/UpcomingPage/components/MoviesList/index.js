import React from 'react';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './styles';
import MovieDetails from '../MovieDetails';
import { setMovieDetails } from '../../../../../redux/actionCreators';

const MoviesList = ({ movies, setMovieDetails }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={4}>
        { movies.map((movie, index) => (
          <GridListTile key={index} className={classes.tile}>
            { movie.backdrop_path || movie.poster_path ? (
              <img src={movie.backdrop_path || movie.poster_path} alt={movie.title} />
            ) : (
              <Skeleton variant="rect" width={500} height={281} />
            )}
            <GridListTileBar
              title={`${movie.title} (${movie.release_date})`}
              subtitle={<span>{movie.genres.join(', ')}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${movie.title}`} className={classes.icon} onClick={() => { setMovieDetails(movie); }}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        )) }
      </GridList>

      <MovieDetails />
    </div>
  );
}

const mapDispatchToProps = { setMovieDetails };

export default connect(
  null,
  mapDispatchToProps,
)(MoviesList);


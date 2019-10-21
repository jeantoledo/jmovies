import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { clearMovieDetails } from '../../../../../redux/actionCreators';
import useStyles from './styles';

const MovieDetails = ({ open, clearMovieDetails, movie }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={clearMovieDetails}>
      { movie ? (
        <Card className={classes.card}>
          <CardActionArea>
            { movie.poster_path ? (
              <CardMedia className={classes.media} image={movie.poster_path} title={movie.title} />
            ) : (
              <Skeleton variant="rect" width={400} height={600} />
            ) }
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
              <Typography gutterBottom component="strong">
                {movie.release_date}
              </Typography>
              <br />
              <Typography gutterBottom component="strong">
                {movie.genres.join(', ')}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : null }
    </Drawer>
  );
}

const mapStateToProps = (state) => ({
  open: Boolean(state.movie),
  movie: state.movie,
});

const mapDispatchToProps = { clearMovieDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);

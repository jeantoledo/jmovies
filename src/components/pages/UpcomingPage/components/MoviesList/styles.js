import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  tile: {
    minWidth: '300px'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  bar: {
    top: '64px',
  },
  tabContent: {
    marginTop: '150px',
  }
}));

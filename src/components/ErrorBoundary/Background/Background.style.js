import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    alignContent: 'stretch',
    alignItems: 'stretch',
    backgroundColor: theme.palette.canvasColor,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: '-1',
  },
  image: {
    alignSelf: 'auto',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'contain',
    height: '100%',
    order: 0,
  },
  'image--center': {
    backgroundPosition: 'center center',
    flex: '6 1 auto',
  },
  'image--left': {
    backgroundPosition: 'bottom left',
    flex: '1 1 auto',
  },
  'image--right': {
    backgroundPosition: 'bottom right',
    flex: '1 1 auto',
  },
}));

export default useStyles;

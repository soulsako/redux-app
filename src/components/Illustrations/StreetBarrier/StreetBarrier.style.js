import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  '@keyframes blink': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  animated_light: {
    animation: 'blink 1s ease infinite',
  },
});

export default useStyles;
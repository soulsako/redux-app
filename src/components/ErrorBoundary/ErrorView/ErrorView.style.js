import { makeStyles } from '@material-ui/core/styles';

/**
 * @param {object} theme MUI theme
 * @return {object} Component styles
 */
const useStyles = makeStyles(theme => ({

  '@media (max-width: 600px)': {
    card: {
      height: '100%!important',
      margin: 'unset!important',
      width: '100%!important',
    },
    container: {
      backgroundColor: 'transparent!important',
      backgroundImage: 'unset!important',
    },
  },
  card: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
  },
  card__content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: 386,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  error_code: {
    color: theme.palette.error.main,
    margin: '12px',
  },
  error_message: {
    color: theme.palette.text.hint,
    margin: '12px',
  },
  illustration: {
    margin: '16px 26px',
  },
}));

export default useStyles;

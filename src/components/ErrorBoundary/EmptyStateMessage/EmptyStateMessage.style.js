import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: theme.spacing.unit * 2,
    width: "100%",
  },
  errorCode: {
    color: theme.palette.error.light,
    fontSize: "0.85rem",
    padding: `${theme.spacing.unit}px 0`,
  },
  illustration: {
    "& > svg": {
      height: "auto",
      width: (props) => props.intSize,
    },
    display: "flex",
    marginBottom: `${theme.spacing.unit * 2}px`,
    marginTop: `${theme.spacing.unit * 2}px`,
  },
  subtitle: {
    color: theme.palette.text.secondary,
    padding: `${theme.spacing.unit}px 0`,
  },
  title: {
    color: theme.palette.text.primary,
    padding: `${theme.spacing.unit}px 0`,
  },
}));

export default useStyles;

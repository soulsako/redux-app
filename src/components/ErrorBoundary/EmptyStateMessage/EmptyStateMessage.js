import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './EmptyStateMessage.style';


const EmptyStateMessage = ({
  intSize,
  intErrorCode,
  nodeIcon,
  nnodeObject,
  strSubtitle,
  strTitle
}) => {
  const classes = useStyles({ intSize });

  return (
    <div className={classes.container}>
      <div className={classes.illustration}>{nodeIcon}</div>
      {null !== strTitle && (
        <Typography align="center" className={classes.title} color="inherit" variant="h6">
          {strTitle}
        </Typography>
      )}
      {null !== nnodeObject && <React.Fragment>{nnodeObject}</React.Fragment>}
      {null !== strSubtitle && (
        <Typography align="center" color="inherit" variant="body1" className={classes.subtitle}>
          {strSubtitle}
        </Typography>
      )}
      {null !== intErrorCode && (
        <Typography align="center" color="inherit" variant="caption" className={classes.errorCode}>
          Error Code:
          {' '}
          <b>{intErrorCode}</b>
        </Typography>
      )}
    </div>
  );
};

EmptyStateMessage.defaultProps = {
  intErrorCode: null,
  nnodeObject: null,
  intSize: 120,
  strSubtitle: null,
  strTitle: null,
};

EmptyStateMessage.propTypes = {
  intErrorCode: PropTypes.string,
  nodeIcon: PropTypes.instanceOf(Object).isRequired,
  nnodeObject: PropTypes.node,
  intSize: PropTypes.string,
  strSubtitle: PropTypes.string,
  strTitle: PropTypes.string,
};

export default EmptyStateMessage;

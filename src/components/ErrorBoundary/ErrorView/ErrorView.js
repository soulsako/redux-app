import PropTypes from 'prop-types';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './ErrorView.style';
import Background from '../Background';
import EmptyStateMessage from '../EmptyStateMessage';
import StreetBarrier from '../../Illustrations/StreetBarrier';

const ErrorView = ({
  nstrErrorCode,
  nstrErrorMessage,
  nstrErrorTitle,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Background />
      <Card className={classes.card} elevation={2}>
        <CardContent className={classes.card__content}>
          <EmptyStateMessage
            intSize={250}
            nodeIcon={<StreetBarrier />}
            strTitle={nstrErrorTitle}
            strSubtitle={nstrErrorMessage}
            intErrorCode={nstrErrorCode}
          />
        </CardContent>
      </Card>
    </div>
  );
};

ErrorView.defaultProps = {
  nstrErrorCode: null,
  nstrErrorMessage: 'The application has encountered a critical error and is unable to continue.',
  nstrErrorTitle: 'Whoops, something went wrong.',
};

ErrorView.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  nstrErrorCode: PropTypes.string,
  nstrErrorMessage: PropTypes.string,
  nstrErrorTitle: PropTypes.string,
};

export default ErrorView;

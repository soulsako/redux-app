import PropTypes from 'prop-types';
import React from 'react';

class ErrorBoundary extends React.Component {
  /**
   * Instantiates ErrorBoundary
   *
   * @param {object} props Component properties
   * @return {undefined}
   * @author JSaunders
   */
  constructor(props) {
    super(props);

    this.state = {
      bError: false,
    };
  }

  /**
   * @param {Error} error Triggering error
   * @param {object} objInfo Component stack trace
   * @return {undefined}
   * @author Jon Saunders
   */
  componentDidCatch(error, objInfo) {
    const { onError } = this.props;

    this.setState({ bError: true });
    onError(error, objInfo);
  }

  /**
   * Renders the component
   *
   * @return {JSX} Component's markup
   * @author JSaunders
   */
  render() {
    const { bError } = this.state;
    const { children, nodeErrorView } = this.props;

    if (bError) {
      return nodeErrorView;
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: null,
  onError: () => {},
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  errorView: PropTypes.node.isRequired,
  onError: PropTypes.func,
};

export default ErrorBoundary;

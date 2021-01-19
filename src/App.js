import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { actionGetAllUsers } from './actions/actionUser';
import { getAllUsers, getUsersLoading, getUsersError, getUsersErrorMessage } from './reducers/reducerUser';
import { ModelUser } from './models';

function App({
  objModelUsers,
  bIsLoading,
  bIsError,
  fetchAllUsers,
  strErrorMessage,
}) {
  useEffect(() => {
    fetchAllUsers();
  },[]);

  if (bIsLoading) {
    return <div>Loading...</div>
  }

  if (!bIsLoading && bIsError) {
    return <p>{strErrorMessage}</p>
  }

  console.log("objModelUsers", objModelUsers);

  return (
    <div className="App">
      <header className="App-header">
        <div>
            {objModelUsers && Object.values(objModelUsers).map(objUser => (
              <ul key={objUser.getField(ModelUser.FIELD_STR_ID)}>
                <li>{objUser.getField(ModelUser.FIELD_STR_FIRST_NAME)}</li>
                <li>{objUser.getField(ModelUser.FIELD_STR_LAST_NAME)}</li>
                <li>{objUser.getField(ModelUser.FIELD_STR_EMAIL)}</li>
                <li>{objUser.getField(ModelUser.FIELD_STR_AVATAR)}</li>
              </ul>
            ))}
        </div>
      </header>
    </div>
  );
}

App.defaultProps = {
  objModelUsers: null,
};

App.propTypes = {
  objModelUsers: PropTypes.arrayOf(
    PropTypes.instanceOf(ModelUser),
  ),
  fetchAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  objModelUsers: getAllUsers(state),
  bIsLoading: getUsersLoading(state),
  bIsError: getUsersError(state),
  strErrorMessage: getUsersErrorMessage(state)
});

const mapDispatchToProps = {
  fetchAllUsers: actionGetAllUsers 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

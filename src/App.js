import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { actionGetAllUsers } from './actions/actionUser';
import { getAllUsers } from './reducers/reducerUser';
import { ModelUser } from './models';

function App({
  arrModelUsers,
  fetchAllUsers,
}) {
  const [bIsLoading, setLoading] = useState(false);
  const [strErrorMessage, setErrorMessage] = useState('');

  const onFetchUsersHandler = () => {
    fetchAllUsers()
    .catch((strErrorMessage) => setErrorMessage(strErrorMessage))
    .finally(() => setLoading(false));
  };

  if (bIsLoading) {
    return <div>Loading...</div>
  }

  if (!bIsLoading && strErrorMessage) {
    return <p>{strErrorMessage}</p>
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onFetchUsersHandler}>Fetch All Users</button>
        <div>
            {arrModelUsers ? arrModelUsers.map(objUser => (
              <ul key={objUser.getField(ModelUser.FIELD_STR_ID)}>
                <li>{objUser.getField(ModelUser.FIELD_STR_FIRST_NAME)}</li>
                <li>{objUser.getField(ModelUser.FIELD_STR_LAST_NAME)}</li>
                <li>{objUser.getField(ModelUser.FIELD_STR_EMAIL)}</li>
                <li>{objUser.getField(ModelUser.FIELD_STR_ROLE)}</li>
              </ul>
            )) : null}
        </div>
      </header>
    </div>
  );
}

App.defaultProps = {
  arrModelUsers: null,
};

App.propTypes = {
  arrModelUsers: PropTypes.arrayOf(
    PropTypes.instanceOf(ModelUser),
  ),
  fetchAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  arrModelUsers: getAllUsers(state),
});

const mapDispatchToProps = {
  fetchAllUsers: actionGetAllUsers 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';
import { googleClientId } from '../config';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const auth = useRef();

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: googleClientId,
          scope: 'email'
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();

          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAuthChange = isSignedIn => {
    if (isSignedIn) {
      signIn(auth.current.currentUser.get().getId());
      return;
    }
    signOut();
  };

  const onSignInClick = () => {
    auth.current.signIn();
  };

  const onSignOutClick = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

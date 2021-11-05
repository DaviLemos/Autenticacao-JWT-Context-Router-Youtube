import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';

function CustomRoutes({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);
  console.log(isPrivate, authenticated);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoutes exact path="/login" component={Login} />
      <CustomRoutes isPrivate exact path="/users" component={Users} />
    </Switch>
  );
}

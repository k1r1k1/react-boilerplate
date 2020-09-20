import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { randomAction } from '../store/actions/auth';

import { Loader } from '../components/Loader';

const Router = ({ randomAction, isAuthenticated, isLoading }) => {
  useEffect(() => {
      randomAction();
  }, [randomAction]);

  return !isLoading ? (
    <BrowserRouter>
      <Switch>
        <Route path="/">
            <div>
                <h1>Home</h1>
            </div>
        </Route>
        <Route path="/about">
           <div>
             <h1>About</h1>
           </div>
        </Route>
      </Switch>
    </BrowserRouter>
  ) : <Loader />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
    randomAction: randomAction.trigger,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

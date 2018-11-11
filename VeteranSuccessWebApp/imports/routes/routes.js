import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import LandingPage from '../ui/LandingPage.js';
import Login from '../ui/Login.js';
import Signup from '../ui/Signup.js';
import Dashboard from '../ui/Dashboard.js';
import NotFound from '../ui/NotFound.js';

const unauthenticatedPages = ['/', '/signup', '/login'];
const authenticatedPages = ['/dashboard'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/dashboard');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

const onEnterNotFound = () => {
  browserHistory.replace('/');
}

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
    console.log('logged in => dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
    console.log('not logged in => landing page');
    //need to do this for outlines and papers routes
  }
};

export const routes = (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={LandingPage} onEnter={onEnterPublicPage} />
    <Route path="/login" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage} />
    <Route path="*" component={LandingPage} onEnter={onEnterPublicPage} />
  </Router>
);

import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item is-size-3">
                  <span className="icon is-large">
                    <i className="fas fa-code"></i>
                  </span>
                  <span>Boilerplate</span>
                </Link>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">
              Oops, you're in the wrong place
            </h1>
            <div className="column column-center align-items-center">
              <Link to="/" className="button is-danger is-large">Go home</Link>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms of Use</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

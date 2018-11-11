import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';
import ReactTooltip from 'react-tooltip';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <section className="hero has-background-white-bis is-fullheight">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item">
                    <label className="is-size-5 has-text-link has-text-weight-bold">Veteran Success</label>
                  </Link>
                  <span className="navbar-item is-hidden-tablet">
                    <a href="https://github.com/brianfakhoury/bostonhacks18" target="_blank" className="button">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>View Source</span>
                    </a>
                  </span>
                </div>
                <div className="navbar-menu">
                  <div className="navbar-end">
                    <span className="navbar-item is-hidden-mobile">
                      <a href="https://github.com/brianfakhoury/bostonhacks18" target="_blank" className="button">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>View Source</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="flex-row flex-row__wrap flex-row__space-around flex-align-items-center">
                <div className="mobile-title">
                  <h1 className="title is-1">Build your life with purpose</h1>
                  <h3 className="subtitle is-3">Veteran Success provides guidance to veterans during the transition to civilian life</h3>
                  <img data-tip="Coming soon" data-for="apple" className="pointer" src="/images/apple_download.svg" />
                  <ReactTooltip id="apple" place="right" type="dark" effect="solid" offset={{right: 0, bottom: 0}} />
                </div>
                <img className="mobile-screenshot" src="/images/welcome.png" />
              </div>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  {/* <li><Link to="/" className="is-size-7">How it works</Link></li> */}
                  <li><a href="https://devpost.com/software/veteran-success" target="_blank" className="is-size-7">Made with <span className="icon has-text-danger"><i className="fas fa-heart"></i></span> by Jules & Brian</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    Accounts.logout();
    // browserHistory.replace('/');
  }

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
                </div>
                <div className="navbar-menu">
                  <div className="navbar-end">
                    {/* <Link to="/signup" className="navbar-item">Sign up</Link> */}
                    <a className="navbar-item has-text-grey-darker" onClick={this.onLogout}>Log Out</a>
                    {/* <span className="navbar-item">
                      <Link to="/login" className="button">
                        <span>Log in</span>
                      </Link>
                    </span> */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="box">
                <div className="tabs is-centered">
                  <ul>
                    <li className="is-active">
                      <a>
                        <span className="icon is-small"><i className="fas fa-home" aria-hidden="true"></i></span>
                        <span className="is-hidden-touch">Living</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon is-small"><i className="fas fa-hand-holding-usd" aria-hidden="true"></i></span>
                        <span className="is-hidden-touch">Finance</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon is-small"><i className="fas fa-chart-line" aria-hidden="true"></i></span>
                        <span className="is-hidden-touch">Career</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
                        <span className="is-hidden-touch">Fun</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon is-small"><i className="far fa-heart" aria-hidden="true"></i></span>
                        <span className="is-hidden-touch">Love</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="columns">
                  <div className="column">
                    <article className="media notification is-link tb-translateY-up tb-has-pointer">
                      <figure className="media-left">
                        <span className="icon is-medium">
                          <i className="fas fa-2x fa-home"></i>
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Home</h1>
                          <p className="is-size-6">
                            Find a home where you can be happy and safe
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="column">
                    <article className="media notification is-info tb-translateY-up tb-has-pointer">
                      <figure className="media-left">
                        <span className="icon is-medium">
                          <i className="fas fa-2x fa-car"></i>
                        </span>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <h1 className="title is-size-4">Car</h1>
                          <p className="is-size-6">
                            Search for an affordable and efficient car
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
          </div>
        </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li><Link to="/privacy" className="is-size-7">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="is-size-7">Terms of Use</Link></li>
                  <li><p className="is-size-7">2018 © Veteran Success, LLC</p></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

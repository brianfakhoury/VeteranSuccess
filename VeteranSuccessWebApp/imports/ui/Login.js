import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    if (email.length === 0) {
      return this.setState({error: 'Please enter your email.'});
    }

    if (password.length === 0) {
      return this.setState({error: 'Please enter your password.'});
    }

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'The email and password you entered did not match our records. Please try again.'});
      } else {
        this.setState({error: ''});
      }
    });
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
                </div>
                <div className="navbar-menu">
                  <div className="navbar-end">
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container flex-column flex-column__center flex-align-items-center">
              <form className="box form" onSubmit={this.handleSubmit} noValidate>
                <div className="flex-column flex-column__center flex-align-items-center">
                  <h1 className="title is-3">Veteran Success</h1>
                  <h1 className="subtitle is-5">Prepare for success</h1>
                </div>
                <br />
                <div className="field">
                  <p className="control">
                    {this.state.error ? <label className="help is-danger has-text-centered">{this.state.error}</label> : undefined}
                    <input className="input is-medium" type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input is-medium" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-medium is-fullwidth is-link" type="submit">Log In</button>
                    <label className="help has-text-centered">Don't have an account? <Link to="/signup" className="has-text-weight-semibold">Sign up now</Link></label>
                    <label className="help has-text-centered">Forgot your password? <Link to="/resetpassword" className="has-text-weight-semibold">Reset Password</Link></label>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

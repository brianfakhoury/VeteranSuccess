import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      name: '',
      password: '',
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

    const name = this.state.name.trim();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    if (name.length === 0) {
      return this.setState({error: 'Please enter your name.'});
    }

    if (email.length === 0) {
      return this.setState({error: 'Please enter your email.'});
    }

    if (password.length === 0) {
      return this.setState({error: 'Please enter your password.'});
    }

    if (password.length < 8) {
      return this.setState({error: 'Password must be at least 8 characters.'});
    }

    const profile = {
      name
    };

    Accounts.createUser({email, password, profile}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        // analytics.track("Sign up", {
        //   email
        // });
        this.setState({error:''});
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
                  {/* <span className="navbar-item">
                    <Link to="/" className="is-size-4 has-text-link has-text-weight-bold">Typeboost</Link>
                  </span> */}
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
                    <input className="input is-medium" type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
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
                    <button className="button is-medium is-fullwidth is-link" type="submit">Sign Up</button>
                    <label className="help has-text-centered">Already have an account? <Link to="/login" className="has-text-weight-semibold">Log in now</Link></label>
                  </p>
                </div>
              </form>
              <label className="help has-text-centered">By signing up, you agree to Typeboost’s <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</label>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

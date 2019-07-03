import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
      super(props)

      this.state = {
          username: "",
          password: "",
          errorText: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value,
          errorText: ""
      });
  }

  handleSubmit(event) {
      axios
        .post(
            "https:/api.devcamp.space/sessions",
        {
          client: {
              username: this.state.username,
              password: this.state.password
            }
        },
        { withCredentials: true }
    )
    .then(response => {
        if (response.data.status === 'created') {
            console.log("You can come in...")
        } else {
            this.setState({
                errorText: "Wrong email or password"
            })
        }
    })
    .catch(error => {
        this.setState({
            errorText: "An error occurred"
        })
    })
      event.preventDefault();
  }

  render() {
      return (
          <div>
          <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
        
          <div>
            {this.state.errorText}
          </div>

          <form onSubmit={this.handleSubmit}>
            <input
                type="email"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
            />

            <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
            />

            <div>
                <button type="submit">Login</button>
            </div>
          </form>
          </div>
      )
  }
}
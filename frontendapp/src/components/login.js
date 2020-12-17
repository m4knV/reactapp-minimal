import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        credentials: {username: '', password: ''}
    }

    login = event => {
        event.preventDefault();

        console.log(this.state.credentials);

        const cred = this.state.credentials

        // const user = {
        //     username: this.state.credentials.username,
        //     password: this.state.credentials.password
        // };

        axios.get(`http://127.0.0.1:8000/api/v2/`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
        axios.post(`http://127.0.0.1:8000/api/v2/auth/login/`, { cred })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div>
              <h1>Login User form</h1>
              <label>
                Username:
                <input type="text" name="username" 
                value={this.state.credentials.username}
                onChange={this.inputChanged}/>
              </label>
              <br />
              <label>
                Password:
                <input type="password" name="password" 
                value={this.state.credentials.password}
                onChange={this.inputChanged}/>
              </label>
              <br />
              <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;

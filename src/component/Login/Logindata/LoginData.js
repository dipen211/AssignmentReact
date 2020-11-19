import React, { Component } from 'react';

//const LoginData = ( props ) => {
class LoginData extends Component {
    state = {
        username: '',
        password: '',
        forgotpassword: '',
        error: '',
    };

    handleSubmit = (props) => {
        props.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        if (!this.state.forgotpassword && this.state.forgotpassword !== this.state.password) {
            return this.setState({ error: 'Forgot Password is required' });
        }
    };

    handleUser = (props) => {
        this.setState({
            username: props.target.value,
        });
    };

    handlePassword = (props) => {
        this.setState({
            password: props.target.value,
        });
    };

    handleForgotPassword = (props) => {
        this.setState({
            forgotpassword: props.target.value,
        });
    };
    render() {
        return (
            <div className="Login" >
                <form onSubmit={this.handleSubmit}>
                    <label>User Name</label>
                    <input type="text" data-test="username" value={this.state.username} onChange={this.handleUser} />

                    <label>Password</label>
                    <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassword} />

                    <label>Forgot Password</label>
                    <input type="password" data-test="password" value={this.state.forgotpassword} onChange={this.handleForgotPassword} />
                    
                    <input type="submit" value="Log In" data-test="submit" />
                </form>
            </div>
        );
    }
};

export default LoginData;
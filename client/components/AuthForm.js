import React, { Component } from 'react'

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'test@test.com',
            password: 'test123'
        }
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            value={this.state.email}
                            onChange={event => this.setState({ email: event.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={event => this.setState({ password: event.target.value })}
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors && this.props.errors.map(err => <div key={err}>{err}</div>)}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;
import React, { Component } from 'react';
import Navbar from './Navbar';
import GoogleLogin from 'react-google-login';
import config from './conf.json';
import axios from 'axios';
export default class App extends Component {

    handle1 = () => {
        rect.setAttribute("class", "rect2");
    }

    handle2 = () => {
        rect.setAttribute("class", "rect1");
    }

    responseGoogle = (response) => {
        axios.get('/login',{ headers: {'x-auth' : response.tokenId}}).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        console.log(response);
    }
    render() {
        console.log(config);
        return (
            <React.Fragment>
                <Navbar />
                <div className="al"></div>
                <div className="container">
                    <div className="header">Sign In</div>
                    <div className='info'>*Click on the input boxes</div>
                    <input id='username' className='text' onFocus={this.handle2} type="text" name="Username" placeholder='Username' />
                    <input id='password' className='pass' onFocus={this.handle1} type="pass" name="Password" placeholder='Password' />
                    <button>Sign In</button>
                    <GoogleLogin
                        clientId={config.clientId}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />
                    <svg width="390" height="549" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect id='rect' className='rect1' x="45px" y="300px" rx="27" ry="27" width="300px" height="50px" style={{ stroke: '#fff', strokeWidth: '1px', fill: '#000' }} />
                    </svg>
                </div>
            </React.Fragment>
        )
    }
}
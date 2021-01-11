import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from "./JoblyApi"
import Alert from "./Alert";


function Login({ setToken }) {
    const history = useHistory();
    const [view, setView] = useState("login");
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        errors: []  
    });

    function loginView() {
        setView('login');
    };

    function signupView() {
        setView("signup");
    };

    function handleChange(evt) {
        const { name, value } = evt.target;
        setLoginInfo(info => ({
            ...info,
            [name]: value
        }));
    }

    let loggedIn = view === "login";

    async function handleSubmit(evt) {
        evt.preventDefault();
        let data;
        let endpoint;

        if (view === "signup") {
            data = {
                username: loginInfo.username,
                password: loginInfo.password,
                first_name: loginInfo.first_name || undefined,
                lastname: loginInfo.lastname || undefined,
                email: loginInfo.email || undefined
            };
            endpoint = "register"
        } else {
            data = {
                username: loginInfo.username,
                password: loginInfo.password
            };
            endpoint = "login";
        }

        let token;

        try {
            token = await JoblyApi[endpoint](data);
        } catch(e) {
            return setLoginInfo(info => ({
                ...info, 
                e
            }))
        }

        setToken(token);
        history.push("/jobs");
    }

    const signipForm = (
        <div>
            <div className="form-group">
                <label>First Name</label>
                <input
                name="first_name"
                className="form-control"
                value={loginInfo.first_name}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input
                name="last_name"
                className="form-control"
                value={loginInfo.last_name}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                name="email"
                type="email"
                className="form-control"
                value={loginInfo.email}
                onChange={handleChange}
                />
            </div>
        </div>
    );
    

    return (
        <div className='Login'>
            <div className="container">
                <div className="btn-group">
                    <button 
                        className={`btn btn-primary ${loggedIn ? "active" : ""} `}
                        onClick={loginView}
                    >
                        Login
                    </button>
                    <button
                        className={`btn btn-primary ${loggedIn ? "" : "active"}`}
                        onClick={signupView}
                    >
                        Sign Up
                    </button>

                </div>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input 
                                    name="username"
                                    className="form-control"
                                    value={loginInfo.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={loginInfo.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {loggedIn ? "" : signipForm}
                            {loginInfo.errors.length ? (
                                <Alert type="danger" messages={loginInfo.errors}/>
                            ) : null}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                onSubmit={handleSubmit}
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
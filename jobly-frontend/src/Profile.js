import React, { useContext, useState } from 'react';
import JoblyApi from './JoblyApi';
import UserContext from './UserContext'

function Profile() {
    const { user, setUser } = useContext(UserContext)

    const [form, setForm] = useState({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        photo_url: user.photo_url || "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({
            ...f,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let profile = {
                first_name: form.first_name || undefined,
                last_name: form.last_name || undefined,
                email: form.email || undefined,
                photo_url: form.photo_url || undefined,
                password: form.password
            };

            let username = form.username;

            let userUpdate = await JoblyApi.updateProfile(username, profile);
            setForm(f => ({
                ...f,
                password: ""
            }));
            setUser(userUpdate);


        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='profile'>
            <h2>Profile</h2>
            <div className='card'>
                <div className='card-body'>
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <p className="form-control-plaintext">{form.username}</p>
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                            name="first_name"
                            className="form-control"
                            type="text"
                            value={form.first_name}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                            name="last_name"
                            className="form-control"
                            type="text"
                            value={form.last_name}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                            name="email"
                            className="form-control"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Photo URL</label>
                            <input
                            name="photo_url"
                            className="form-control"
                            type="url"
                            value={form.photo_url}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Enter your password</label>
                            <input
                            name="password"
                            className="form-control"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            />
                        </div>

                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Profile;
// LoginForm.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });


    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8005/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success('Login successful!');


            setTimeout(() => {
                navigate('/fetch')
            }, 1000);


                setFormData({
                    email: '',
                    password: ''
                });
            } else {
                toast.error(result.message || 'Something went wrong.');
            }
        } catch (error) {
            toast.error('Error: Unable to connect to server.');
        }
    };

    return (
        <div className='container'>
            <div className="form-container">
                <div className="form-toggle">      <h2>Login Form</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                    <p>
                        Don't have an account? <Link to="/signup">Signup</Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;

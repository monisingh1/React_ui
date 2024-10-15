import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8005/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success('Signup successful!');

                // Wait for 2 seconds before redirecting
                setTimeout(() => {
                    navigate('/login'); // Redirect to login page after 2 seconds
                }, 1000); // 2000 milliseconds = 2 seconds

                // Reset form fields
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    address: ''
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
                <h2>Signup Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter Your Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
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
                    <button type="submit">Signup</button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignupForm;

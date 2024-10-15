import React, { useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import axios from 'axios'

const Edit = () => {

    const {id} = useParams()


    const [formData, setFormData] = useState({
        name: '',
        address: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

useEffect(() => {
axios.get(`http://localhost:8005/api/get/${id}`)
.then((response)=>{
    setFormData(response.data)
})
.catch((error)=>{
    console.log(error.message)
})
},[id])







    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8005/api/update/${id}`,formData)
        

             if (response.status === 200) {
                toast.success(response.data.message);

                 setTimeout(() => {
                    navigate('/userdata'); 
                }, 1000);  

               
                setFormData({
                    name: '',
                    address: ''
                });
            } else {
                toast.error('Something went wrong.');
            }
        } catch (error) {
            toast.error('Error: Unable to connect to server.');
        }
    };

    return (
        <div className='container'>
            <div className="form-container">
                <h2>Update User Form</h2>
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
                   
                    <button type="submit">Edit</button>
                </form>
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Edit;

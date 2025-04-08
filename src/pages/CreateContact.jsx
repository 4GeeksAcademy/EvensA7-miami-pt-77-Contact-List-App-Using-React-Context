import React, { useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from 'react-router-dom';

export const CreateContact = () => {

    const [contact, setContact] = useState({ name: "", phone: "", email: "", address: "" });

    const { store, dispatch, postContact } = useGlobalReducer();

    const navigate = useNavigate();

    const handleCreateContact = async (e) => {
        e.preventDefault();

        if (!contact.name || !contact.phone || !contact.email || !contact.address) {
            alert("Please fill in all fields.");
            return;
        }

        await postContact(dispatch, contact);

        navigate("/");
    };

    return (
        <div className='w-75 mx-auto mt-5 container rounded p-4'>

            {/* Name input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Name</span>
                <input 
                    type="text" 
                    className="form-control"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />
            </div>

            {/* Phone input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Phone</span>
                <input 
                    type="text" 
                    className="form-control"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />        
            </div>

            {/* Email input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Recipient's email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
            </div>

            {/* Address input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Address</span>
                <input 
                    type="text" 
                    className="form-control"
                    value={contact.address}
                    onChange={(e) => setContact({ ...contact, address: e.target.value })}
                />
            </div>

            {/* Submit button: Calls handleCreateContact function when clicked */}
            <button 
                className='btn'
                onClick={(e) => handleCreateContact(e)}
            >
                <ContactButton display={"Add Contact"} color={"blue"}/>
            </button>
        </div>
    );
}

export default CreateContact;
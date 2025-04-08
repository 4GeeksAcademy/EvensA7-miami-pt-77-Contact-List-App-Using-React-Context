import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams, Link, useNavigate } from 'react-router-dom';

export const UpdateContact = () => {
    const { id } = useParams();
    const [currentContactInfo, setCurrentContactInfo] = useState({ name: "", phone: "", email: "", address: "" });
    const [newContactInfo, setNewContactInfo] = useState({ name: "", phone: "", email: "", address: "" });
    const { store, dispatch, updateContact, getContacts } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        getContacts()
    }, [])

    useEffect(() => {
        console.log(store.contacts)
        let currentContact = store.contacts?.filter((contact, index) => { return contact.id == id })

        if (currentContact.length === 1) {
            setCurrentContactInfo(currentContact[0]);
            setNewContactInfo(currentContact[0]);
        }
    }, [store.contacts]);

    const handleUpdateContact = (e) => {
        e.preventDefault();
        updateContact(newContactInfo);
        navigate("/");
    };

    return (
        <div className='w-75 mx-auto mt-5 container rounded p-4'>
    
            {/* Name input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                    value={newContactInfo.name} // Prefills with existing contact data
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, name: e.target.value })} // Updates state as user types
                />
            </div>
    
            {/* Phone input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                    value={newContactInfo.phone}
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, phone: e.target.value })}
                />
            </div>
    
            {/* Email input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={newContactInfo.email}
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, email: e.target.value })}
                />
            </div>
    
            {/* Address input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                    value={newContactInfo.address}
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, address: e.target.value })}
                />
            </div>
    
            {/* Update Contact button */}
            <button
                className='btn '
                onClick={(e) => handleUpdateContact(e)}>
                <ContactButton display={"Update Contact"} color={"orange"} />
            </button>
        </div>
    );
}


export default UpdateContact;
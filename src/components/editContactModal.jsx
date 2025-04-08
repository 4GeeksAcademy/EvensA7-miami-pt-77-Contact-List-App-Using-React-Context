import React, { useState, useEffect } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function EditContactModal({ contact }) {

    const { store, dispatch, updateContact, getContacts } = useGlobalReducer();

    
    const [currentContactInfo, setCurrentContactInfo] = useState({ name: "", phone: "", email: "", address: "" });

    
    const [newContactInfo, setNewContactInfo] = useState({ name: "", phone: "", email: "", address: "" });


    useEffect(() => {
        getContacts();
    }, []);


    useEffect(() => {
        let currentContact = store.contacts.filter((eachContact) =>
            eachContact.id == contact.id
        );

        if (currentContact.length == 1) {
            setCurrentContactInfo(currentContact[0]);
            setNewContactInfo(currentContact[0]);
        }
    }, [store.contacts]);

    const handleUpdateContact = (e) => {
        e.preventDefault();
        updateContact(newContactInfo);
    };

    return (
        <div>
            <div className="modal-body text-start p-3 ms-3">
                
                {/* Name Input */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Name: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.name}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, name: e.target.value })}
                    />
                </div>

                {/* Phone Input */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Phone: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.phone}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, phone: e.target.value })}
                    />
                </div>

                {/* Email Input */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Email: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.email}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, email: e.target.value })}
                    />
                </div>

                {/* Address Input */}
                <div className="d-flex">
                    <p className='me-2'>Address: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.address}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, address: e.target.value })}
                    />
                </div>
            </div>

            {/* Modal Footer: Contains the update button */}
            <div className="modal-footer">
                {/* Update button triggers handleUpdateContact and dismisses the modal */}
                <button className='btn btn-info' data-bs-dismiss="modal" onClick={(e) => handleUpdateContact(e)}>Update</button>
            </div>
        </div>
    );
}
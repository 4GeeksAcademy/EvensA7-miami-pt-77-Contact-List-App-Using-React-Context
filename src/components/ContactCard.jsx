import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from 'react-router-dom'
import MoreInfoModal from './moreInfoModal.jsx';

export default function ContactCard({ contact }) {
    const { store, dispatch, deleteContact, updateContact } = useGlobalReducer()
    return (

        <div className="border p-2 mx-2 row" >
            <div className='col-2'>
                <img src={`https://picsum.photos/200`} className="card-img-top rounded-circle" alt="Profile" />
            </div>
            <div className="col-6 text-start">


                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">{contact.phone}</p>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.address}</p>


            </div>
            <div className="btn-group btn-group-sm col-4">
                <div className="modal fade" id={`moreInfoModal${contact.id}`} tabIndex="-1" aria-labelledby="moreInfoModalLabel" aria-hidden="true">
                    <MoreInfoModal contact={contact} />
                </div>
                <Link to={`update/${contact.id}`} className="link-light btn btn-warning"><i class="fa-solid fa-pencil"></i></Link>
                <span className="btn btn-warning" onClick={() => deleteContact(contact.id)}><i class="fa-solid fa-trash"></i></span>
            </div>
        </div>



    )
}
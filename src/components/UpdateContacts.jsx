import React, { useEffect, useState } from "react"
import useGlobalReducer from 
import { useParams } from "react-router-dom"

export const UpdateContact = () => {
    const { id } = useParams();
    const { currentContact, setCurrentContact } = useState({name:"", phone:"", email:"", address:""})
    const { store, dispatch, UpdateContact } = useGlobalReducer()

    useEffect(() => {
        getContacts()
    }, [])

    useEffect(() => {
        console.log(store.contacts)
        let contact = store.contacts?.filter((contact, index)=> {return contact.id == id})

    })

    return ()
}
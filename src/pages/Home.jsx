import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch, fetchAgenda } = useGlobalReducer();

	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetchAgenda();
	}, []);

	useEffect(() => {
		setContacts(store.contacts);
	}, [store.contacts]);

	return (
		<div className="text-center mt-4 w-100">
			<Link to="/create" className="d-flex justify-content-end">
				<button className="btn btn-success ">Add New Contact</button>
			</Link>
			<div className="container">

				{contacts.length > 0 ? contacts.map((contact, index) => {

					return (
						<ContactCard
							key={contact.id}
							contact={contact}
						/>
					)
				})
					:

					<h2>No Contacts Yet!</h2>
				}
			</div>
		</div>
	);
}; 
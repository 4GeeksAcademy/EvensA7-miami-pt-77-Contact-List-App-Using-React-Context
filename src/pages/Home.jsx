import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";

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
			<div className="d-flex flex-wrap justify-content-center">

				{contacts.length > 0 ? contacts.map((contact, index) => {
					
					return (
						<ContactCard
							key={contact.id}
							contact={contact}
							pictureNumber={pictureNumber}
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
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const handleOnChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};
	const valueContact = store.contacts.find(contact => {
		return contact.id == props.match.params.id;
	});
	const [contact, setContact] = useState({
		name: valueContact.full_name,
		email: valueContact.email,
		phone: valueContact.phone,
		address: valueContact.address,
		id: valueContact.id
	});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={contact.name}
							onChange={handleOnChange}
							name="name"
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							value={contact.email}
							onChange={handleOnChange}
							name="email"
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							value={contact.phone}
							onChange={handleOnChange}
							name="phone"
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							value={contact.address}
							onChange={handleOnChange}
							name="address"
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => actions.saveContact(contact)}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};

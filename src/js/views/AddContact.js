import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });
	const handleOnChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
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
							onChange={handleOnChange}
							name="address"
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<Link
						to="/"
						onClick={() => actions.addContact(contact)}
						type="button"
						className="btn btn-primary form-control">
						save
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

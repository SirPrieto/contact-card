const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getfetchData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/abe")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(err => console.log(err));
			},

			addContact: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "abe",
						full_name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address
					})
				})
					.then(response => response.json())
					.then(() => {
						getActions().getfetchData();
					});
			},

			saveContact: contact => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "abe",
						full_name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address
					})
				})
					.then(response => response.json())
					.then(() => {
						getActions().getfetchData();
					});
			},

			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(() => {
						getActions().getfetchData();
					});
			}
		}
	};
};

export default getState;

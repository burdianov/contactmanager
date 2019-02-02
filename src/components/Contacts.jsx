import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karren Williams",
        email: "karren@gmail.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "111-111-1111"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    let newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={() => this.deleteContact(contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

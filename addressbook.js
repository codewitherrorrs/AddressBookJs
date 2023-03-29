let contacts = [
    { name: "John Smith", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Doe", email: "jane@example.com", phone: "987-654-3210" },
    { name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5555" }
  ];
  
  // Function to delete a contact by name
  function deleteContact(name) {
    let index = -1;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      contacts.splice(index, 1);
      console.log(`Deleted contact: ${name}`);
    } else {
      console.log(`Contact not found: ${name}`);
    }
  }
  
  // Example usage
  deleteContact("Jane Doe");
  console.log(contacts);
  
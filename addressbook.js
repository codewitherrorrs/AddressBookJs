class Contact {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  const contacts = [
    new Contact('John Doe', 'johndoe@example.com'),
    new Contact('Jane Doe', 'janedoe@example.com'),
    new Contact('Bob Smith', 'bobsmith@example.com')
  ];
  
  function editContact(name, newEmail) {
    const contact = contacts.find(contact => contact.name === name);
    if (!contact) {
      throw new Error(`Contact ${name} not found`);
    }
    contact.email = newEmail;
  }
  
  editContact('Jane Doe', 'janedoe-new@example.com');
  console.log(contacts); // Output: [Contact {name: 'John Doe', email: 'johndoe@example.com'}, Contact {name: 'Jane Doe', email: 'janedoe-new@example.com'}, Contact {name: 'Bob Smith', email: 'bobsmith@example.com'}]
  

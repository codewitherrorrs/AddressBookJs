class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  }
  
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  
    deleteContact(contact) {
      const index = this.contacts.indexOf(contact);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
  
    getContacts() {
      return this.contacts;
    }
  
    searchContacts(query) {
      return this.contacts.filter(contact => {
        return (
          contact.firstName.includes(query) ||
          contact.lastName.includes(query) ||
          contact.phoneNumber.includes(query) ||
          contact.email.includes(query)
        );
      });
    }
  
    getNames() {
      return this.contacts.map(contact => `${contact.firstName} ${contact.lastName}`);
    }
  
    getTotalContacts() {
      return this.contacts.reduce((total, contact) => {
        return total + 1;
      }, 0);
    }
  }
  
  // Example usage
  const addressBook = new AddressBook();
  
  const contact1 = new Contact('John', 'Doe', '123 Main St', 'Anytown', 'CA', '12345', '555-555-5555', 'john.doe@example.com');
  addressBook.addContact(contact1);
  
  const contact2 = new Contact('Jane', 'Smith', '456 Elm St', 'Othertown', 'CA', '54321', '555-555-1234', 'jane.smith@example.com');
  addressBook.addContact(contact2);
  
  console.log(addressBook.getNames()); // Output: ["John Doe", "Jane Smith"]
  console.log(addressBook.getTotalContacts()); // Output: 2
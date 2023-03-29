class Contact {
    constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }
  
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      if (!(contact instanceof Contact)) {
        throw new Error("Provided object is not a valid contact.");
      }
      this.contacts.push(contact);
    }
  
    filterContactsByName(name) {
      return this.contacts.filter((contact) => contact.name.toLowerCase().includes(name.toLowerCase()));
    }
  
    mapContactsToEmails() {
      return this.contacts.map((contact) => contact.email);
    }
  
    reduceContactsToPhoneNumbers() {
      return this.contacts.reduce((phoneNumbers, contact) => {
        phoneNumbers.push(contact.phone);
        return phoneNumbers;
      }, []);
    }
  }
  
  // Create a new AddressBook instance
  const myAddressBook = new AddressBook();
  
  // Add some contacts
  const john = new Contact("John Doe", "john.doe@example.com", "555-1234");
  myAddressBook.addContact(john);
  
  const jane = new Contact("Jane Smith", "jane.smith@example.com", "555-5678");
  myAddressBook.addContact(jane);
  
  // Filter contacts by name
  const filteredContacts = myAddressBook.filterContactsByName("john");
  console.log(filteredContacts);
  
  // Map contacts to emails
  const mappedContacts = myAddressBook.mapContactsToEmails();
  console.log(mappedContacts);
  
  // Reduce contacts to phone numbers
  const reducedContacts = myAddressBook.reduceContactsToPhoneNumbers();
  console.log(reducedContacts);
  
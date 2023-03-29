let addressBook = [];

function addPerson(name, email, phone) {
  // check if person already exists in address book
  const isDuplicate = addressBook.filter(person => person.name === name).length > 0;

  // add person to address book if not a duplicate
  if (!isDuplicate) {
    addressBook.push({ name, email, phone });
    console.log(`Added ${name} to address book.`);
  } else {
    console.log(`${name} already exists in address book.`);
  }
}

// example usage
addPerson('John Smith', 'john@example.com', '555-1234');
addPerson('Jane Doe', 'jane@example.com', '555-5678');
addPerson('John Smith', 'john.smith@example.com', '555-4321'); // this will be a duplicate entry
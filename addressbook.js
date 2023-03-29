const addressBook = [
    { name: 'Alice', phone: '123-456-7890' },
    { name: 'Bob', phone: '555-555-5555' },
    { name: 'Charlie', phone: '987-654-3210' },
    { name: 'David', phone: '555-123-4567' },
    { name: 'Eve', phone: '555-123-4567' }
  ];
  
  const numOfContacts = addressBook.reduce((count, contact) => {
    return count + 1;
  }, 0);
  
  console.log(numOfContacts); // Output: 5
  
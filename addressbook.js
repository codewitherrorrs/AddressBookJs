const contacts = [
    {
      name: 'John Doe',
      city: 'New York',
      state: 'NY',
      phone: '555-555-5555'
    },
    {
      name: 'Jane Smith',
      city: 'Los Angeles',
      state: 'CA',
      phone: '555-555-5555'
    },
    {
      name: 'Bob Johnson',
      city: 'New York',
      state: 'NY',
      phone: '555-555-5555'
    },
    {
      name: 'Alice Lee',
      city: 'San Francisco',
      state: 'CA',
      phone: '555-555-5555'
    }
  ];
  
  // Filter contacts by city
  const contactsInNYC = contacts.filter(contact => contact.city === 'New York');
  console.log('Contacts in NYC:', contactsInNYC);
  
  // Filter contacts by state
  const contactsInCA = contacts.filter(contact => contact.state === 'CA');
  console.log('Contacts in CA:', contactsInCA);
  
  // Map contacts to names and filter by city
  const namesInNYC = contacts
    .filter(contact => contact.city === 'New York')
    .map(contact => contact.name);
  console.log('Names in NYC:', namesInNYC);
  
  // Map contacts to names and filter by state
  const namesInCA = contacts
    .filter(contact => contact.state === 'CA')
    .map(contact => contact.name);
  console.log('Names in CA:', namesInCA);
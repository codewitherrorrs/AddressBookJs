const contacts = [
    { name: 'John Doe', city: 'New York', state: 'New York' },
    { name: 'Jane Smith', city: 'Los Angeles', state: 'California' },
    { name: 'Bob Johnson', city: 'Chicago', state: 'Illinois' },
    { name: 'Mike Williams', city: 'Chicago', state: 'Illinois' },
    { name: 'Mary Davis', city: 'San Francisco', state: 'California' },
    { name: 'David Lee', city: 'New York', state: 'New York' }
  ];
  
  // Get count of contacts by city
  const contactsByCity = contacts.reduce((acc, curr) => {
    if (acc[curr.city]) {
      acc[curr.city]++;
    } else {
      acc[curr.city] = 1;
    }
    return acc;
  }, {});
  
  console.log('Contacts by city:', contactsByCity);
  
  // Get count of contacts by state
  const contactsByState = contacts.reduce((acc, curr) => {
    if (acc[curr.state]) {
      acc[curr.state]++;
    } else {
      acc[curr.state] = 1;
    }
    return acc;
  }, {});
  
  console.log('Contacts by state:', contactsByState);
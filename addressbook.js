const people = [
    { name: 'Alice', city: 'New York', state: 'NY' },
    { name: 'Bob', city: 'Los Angeles', state: 'CA' },
    { name: 'Charlie', city: 'San Francisco', state: 'CA' },
    { name: 'David', city: 'Chicago', state: 'IL' },
    { name: 'Emily', city: 'Boston', state: 'MA' },
    { name: 'Frank', city: 'Miami', state: 'FL' },
  ];
  
  // Search for people in a particular city
  const city = 'New York';
  const peopleInCity = people.filter(person => person.city === city);
  console.log(`People in ${city}:`, peopleInCity);
  
  // Search for people in a particular state
  const state = 'CA';
  const peopleInState = people.filter(person => person.state === state);
  console.log(`People in ${state}:`, peopleInState);
  
  // Map the names of people in a particular city
  const city2 = 'Chicago';
  const namesInCity2 = people
    .filter(person => person.city === city2)
    .map(person => person.name);
  console.log(`Names of people in ${city2}:`, namesInCity2);
  
  //
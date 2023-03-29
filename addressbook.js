// Sample array of address book entries
const addressBook = [
    {
      name: 'John Smith',
      city: 'San Francisco',
      state: 'CA',
      zip: '94107'
    },
    {
      name: 'Jane Doe',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90012'
    },
    {
      name: 'Bob Johnson',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    }
  ];
  
  // Sort function by city
  function sortByCity(a, b) {
    if (a.city < b.city) {
      return -1;
    } else if (a.city > b.city) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Sort function by state
  function sortByState(a, b) {
    if (a.state < b.state) {
      return -1;
    } else if (a.state > b.state) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Sort function by zip
  function sortByZip(a, b) {
    if (a.zip < b.zip) {
      return -1;
    } else if (a.zip > b.zip) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Sort the address book by city
  addressBook.sort(sortByCity);
  console.log(addressBook);
  
  // Sort the address book by state
  addressBook.sort(sortByState);
  console.log(addressBook);
  
  // Sort the address book by zip
  addressBook.sort(sortByZip);
  console.log(addressBook);
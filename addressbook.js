class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
      if (!this.validateName(firstName)) {
        throw new Error("Invalid first name.");
      }
      if (!this.validateName(lastName)) {
        throw new Error("Invalid last name.");
      }
      if (!this.validateAddress(address)) {
        throw new Error("Invalid address.");
      }
      if (!this.validateAddress(city)) {
        throw new Error("Invalid city.");
      }
      if (!this.validateAddress(state)) {
        throw new Error("Invalid state.");
      }
      if (!this.validateZip(zip)) {
        throw new Error("Invalid zip code.");
      }
      if (!this.validatePhone(phone)) {
        throw new Error("Invalid phone number.");
      }
      if (!this.validateEmail(email)) {
        throw new Error("Invalid email address.");
      }
  
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phone = phone;
      this.email = email;
    }
  
    validateName(name) {
      return /^[A-Z][a-z]{2,}$/.test(name);
    }
  
    validateAddress(address) {
      return /^[A-Za-z0-9\s,'-]{4,}$/.test(address);
    }
  
    validateZip(zip) {
      return /^\d{5}$/.test(zip);
    }
  
    validatePhone(phone) {
      return /^\d{10}$/.test(phone);
    }
  
    validateEmail(email) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }
  }
  
  // Example usage
  try {
    const contact = new Contact(
      "John",
      "Doe",
      "123 Main St",
      "Anytown",
      "CA",
      "12345",
      "5555555555",
      "johndoe@example.com"
    );
    console.log(contact);
  } catch (error) {
    console.log(error.message);
  }
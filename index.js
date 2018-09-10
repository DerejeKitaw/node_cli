const mongoose = require('mongoose');

// Map global; promise  - get rid of warning
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
  userMongoClient: true
});

// Import model
const Customer = require('./models/customer');


// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.log('New Customer Added');
    db.close();
  })
}

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
    .then(customer => {
      console.info(customer);
      console.info(`${customer.legth} matches`);
      db.close();
    });
}

// Export All methods
module.exports = {
  addCustomer,
  findCustomer
}
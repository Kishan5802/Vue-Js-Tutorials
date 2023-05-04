const mongoose = require('mongoose');
const validator = require('validator');

const userDetails = new mongoose.Schema({
  // firstName: {
  //   type: String,
  //   require: true
  // },
  // lastName: {
  //   type: String,
  //   require: true
  // },
  userName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email Invalid');
      }
    }
  },
  mobileNo: {
    type: String,
    require: true,
    match: [/^[0-9]{10}$/, 'Please enter a valid phone number']
  },
  password: {
    type: String,
    require: true
  },
  isDeleted: {
    type: Boolean,
    default: true
  },
  timeStamp: {
    type: Date,
    default: Date.now
  }
});

const UserDetails = new mongoose.model('UserDetails', userDetails);
module.exports = UserDetails;
// const createDocument = async () => {
//   try {
//     const userdetails3 = new UserDetails({
//       name: 'Test7',
//       email: '30@gmail.com',
//       phoneNumber: 9725418472,
//       password: '123',
//       isDeleted: true
//     });

//     const result = await UserDetails.insertMany([userdetails3]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// createDocument();
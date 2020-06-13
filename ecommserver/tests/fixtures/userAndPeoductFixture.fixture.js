const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const faker = require('faker');
const User = require('../../src/models/user.model');
const product = require('../../src/models/product.model');

const password = 'password1';
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const userOne = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
};

const userTwo = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
};
const productOne = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  description: "a shoe of Reebok",
  usermail: faker.internet.email().toLowerCase(),
  price:"10"
};
const productTwo = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  description: "a Tshirt of Reebok",
  usermail: faker.internet.email().toLowerCase(),
  price:"10"
};



const insertUsers = async (users) => {
  await User.insertMany(users.map((user) => ({ ...user, password: hashedPassword })));
};
const insertProducts = async (products) => {
  await product.insertMany(products.map((product) => ({...product})));
};

module.exports = {
  userOne,
  userTwo,
  insertUsers,
  productOne,
  productTwo,
  insertProducts
};

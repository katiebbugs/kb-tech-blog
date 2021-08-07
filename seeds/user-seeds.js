const { User } = require('../models');

const userdata = [
  {
    username: 'user1',
    email: 'testing1@mail.com',
    password: 'password1'
  },
  {
    username: 'user2',
    email: 'testing2@mail.com',
    password: 'password2'
  },
  {
    username: 'user3',
    email: 'testing3@mail.com',
    password: 'password3'
  },
  {
    username: 'user4',
    email: 'testing4@mail.com',
    password: 'password4'
  },
  {
    username: 'user5',
    email: 'testing5@mail.com',
    password: 'password5'
  },
  {
    username: 'user6',
    email: 'testing6@mail.com',
    password: 'password6'
  },
  {
    username: 'user7',
    email: 'testing7@mail.com',
    password: 'password7'
  },
  {
    username: 'user8',
    email: 'testing8@mail.com',
    password: 'password8'
  },
  {
    username: 'user9',
    email: 'testing9@mail.com',
    password: 'password9'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----- sequelize sync -----');

  await seedUsers();
  console.log('----- seeded users -----');

  await seedPosts();
  console.log('----- seeded posts -----');

  await seedComments();
  console.log('----- seeded comments -----');

  await seedVotes();
  console.log('----- seeded votes -----');

  process.exit(0);
};

seedAll();
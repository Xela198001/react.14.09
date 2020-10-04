const faker = require('faker');

module.exports = () => {
  return {
    chats: [
      { id: 1, title: faker.name.title(), messageList: [1, 2, 3] },
      { id: 2, title: faker.name.title(), messageList: [3, 2] },
      { id: 3, title: faker.name.title(), messageList: [2, 3] },
    ],
    messages: [
      {
        id: 1,
        author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
        message: faker.random.words(),
      },
      {
        id: 2,
        author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
        message: faker.random.words(),
      },
      {
        id: 3,
        author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
        message: faker.random.words(),
      },
    ],
    profile: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
  };
};

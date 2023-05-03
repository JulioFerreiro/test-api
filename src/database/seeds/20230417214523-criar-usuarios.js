const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      nome: 'Júlio Ferreiro 0',
      email: 'julioferreiro0@live.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'Júlio Ferreiro 1',
      email: 'julioferreiro1@live.com',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'Júlio Ferreiro 2',
      email: 'julioferreiro2@live.com',
      password_hash: await bcryptjs.hash('456789', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {}),

  down: () => { },
};

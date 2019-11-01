module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Pedro Oliveira',
          email: 'pedro@gympoint.com.br',
          age: 21,
          weight: 97.3,
          height: 1.83,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rosely Oliveira',
          email: 'rosely@gympoint.com.br',
          age: 47,
          weight: 80.0,
          height: 1.59,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lidiane Oliveira',
          email: 'lidiane@gympoint.com.br',
          age: 16,
          weight: 55.0,
          height: 1.6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ingrid Oliveira',
          email: 'ingrid@gympoint.com.br',
          age: 23,
          weight: 86.0,
          height: 1.55,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Juarez Oliveira',
          email: 'juarez@gympoint.com.br',
          age: 48,
          weight: 89.0,
          height: 1.7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Evandro Oliveira',
          email: 'evandro@gympoint.com.br',
          age: 25,
          weight: 85.0,
          height: 1.77,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => queryInterface.bulkDelete('students', null, {}),
};

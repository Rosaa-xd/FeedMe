// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://ipscdgajryyfrs:cc5a55912ce18f339c918730c579dfc110430b91e0426a06b96447450b79da90@ec2-54-75-225-143.eu-west-1.compute.amazonaws.com:5432/d3srtpmknpf27d?ssl=true",
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

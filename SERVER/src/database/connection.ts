import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
		user: 'postgres',
		password: 'docker',
		database: 'proffy',
    },
    useNullAsDefault:true,
})
export default db;
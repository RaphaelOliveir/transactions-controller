import type { Knex } from 'knex'
import knexModule from 'knex'
import { env } from './env/index.js'
const { knex: setupKnex } = knexModule

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL not found')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)

import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.DATABASE_URL || ''
const host = process.env.PGHOST || ''
const sslMode = process.env.PGSSLMODE || ''
const shouldUseSsl = sslMode === 'require' || host.includes('render.com') || connectionString.includes('render.com')

const config = connectionString
    ? { connectionString }
    : {
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        host,
        port: process.env.PGPORT,
        database: process.env.PGDATABASE
    }

if (shouldUseSsl) {
    config.ssl = {
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)

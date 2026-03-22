import { pool } from './database.js'

const dropAndCreate = `
DROP TABLE IF EXISTS custom_items CASCADE;
CREATE TABLE custom_items (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    upper_material TEXT NOT NULL,
    sole_style TEXT NOT NULL,
    lace_style TEXT NOT NULL,
    accent_trim TEXT NOT NULL,
    total_price INTEGER NOT NULL,
    preview_icon TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`

const resetDatabase = async () => {
    await pool.query(dropAndCreate)
    console.log('custom_items table is ready')
    await pool.end()
}

resetDatabase().catch((error) => {
    console.error(error)
    process.exit(1)
})

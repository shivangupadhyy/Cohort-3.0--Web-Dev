import express from 'express';
import { Client } from 'pg';
const app = express();
app.use(express.json());
const pgClient = new Client("postgresql://neondb_owner:npg_YjZwf5Ico8SB@ep-royal-truth-a1eqgfh9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require");
// add error handler so that unexpected connection errors don't crash the process
pgClient.on('error', (err) => {
    console.error('Postgres client error', err);
});
// log when the client closes
pgClient.on('end', () => {
    console.warn('Postgres client has closed the connection');
});
// attempt to connect and catch DNS/network errors explicitly
async function initializeDb() {
    try {
        await pgClient.connect();
        console.log('Connected to Postgres');
    }
    catch (err) {
        console.error('Could not connect to Postgres:', err);
        // optionally retry logic could be placed here
    }
}
initializeDb();
app.post("/signup", async (req, res) => {
    const { username, password, email, city, country, street, pincode } = req.body;
    try {
        // insert user and return its id
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5)`;
        await pgClient.query("BEGIN;");
        const userResult = await pgClient.query(insertQuery, [username, email, password]);
        const userId = userResult.rows[0].id;
        // avoid long artificial delay; keeping a transaction open for 100 seconds triggers
        // remote connection termination on some hosted databases.
        await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        await pgClient.query("COMMIT;");
        res.json({
            message: "You have been signed up"
        });
    }
    catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
// allow GET requests for metadata so simple browser queries work
// app.get("/metadata", async (req, res) => {
//     const id = req.query.id;
//     const query1 = `SELECT * FROM users WHERE id=$1`;
//     const response1 = await pgClient.query(query1, [id]);
//     const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
//     const response2 = await pgClient.query(query2, [id]);
//     res.json({
//         user: response1.rows[0],
//         address: response2.rows[0]
//     });
// });
app.get('/better-metadata', async (req, res) => {
    const id = req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1;`;
    const response = await pgClient.query(query, [id]);
    res.json({
        response: response.rows
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map
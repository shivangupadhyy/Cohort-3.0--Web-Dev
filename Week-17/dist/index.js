import express from 'express';
import { Client } from 'pg';
const app = express();
app.use(express.json());
const pgClient = new Client("postgresql://neondb_owner:npg_YjZwf5Ico8SB@ep-royal-truth-a1eqgfh9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require");
pgClient.connect();
app.post("/signup", async (req, res) => {
    const { username, password, email, city, country, street, pincode } = req.body;
    try {
        // insert user and return its id
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5)`;
        await pgClient.query("BEGIN;");
        const userResult = await pgClient.query(insertQuery, [username, email, password]);
        const userId = userResult.rows[0].id;
        await new Promise(x => setTimeout(x, 100 * 1000)); //stop the control on this linne for 100s
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
app.get("/metadata", async (req, res) => {
    const id = req.query.id;
    const query1 = `SELECT username, email, id FROM users WHERE id=$1`;
    const response1 = await pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
    const response2 = await pgClient.query(query2, [id]);
    res.json({
        user: response1.rows[0],
        address: response2.rows
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map
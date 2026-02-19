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
        const userResult = await pgClient.query(insertQuery, [username, email, password]);
        const userId = userResult.rows[0].id;
        // insert address using returned user id
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5)`;
        await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        res.json({
            message: "You have been signed up"
        });
    }
    catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map
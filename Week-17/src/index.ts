import express from 'express'
import {Client} from 'pg'

const app = express();

app.use(express.json());
const pgClient = new Client("postgresql://neondb_owner:npg_YjZwf5Ico8SB@ep-royal-truth-a1eqgfh9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require");
pgClient.connect();

app.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
        await pgClient.query(insertQuery, [username, email, password]);

        res.json({
            message: "You have been signed up"
        });
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.listen(3000);




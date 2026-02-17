import {Client} from 'pg'

const pgClient = new Client("postgresql://neondb_owner:npg_YjZwf5Ico8SB@ep-royal-truth-a1eqgfh9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require");

async function main(){
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response);
}

main();


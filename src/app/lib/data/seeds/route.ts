import { db } from '@vercel/postgres';

const client = await db.connect();

async function createUsersTable() {
    await client.sql`DROP TABLE IF EXISTS users CASCADE`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL
    );
  `;
}

async function createProjectsTable() {
    await client.sql`DROP TABLE IF EXISTS projects`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        creator_id UUID NOT NULL,
        repository_id VARCHAR(9) NULL,
        app_link TEXT,
        description TEXT NOT NULL,
        status TEXT NOT NULL,
        edit_stage TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL,

        FOREIGN KEY (creator_id) REFERENCES users(id)
    );
  `;
}

export async function GET() {

    return Response.json({ message: 'Comment this line to execute commands' });
    try {
        await client.sql`BEGIN`;
        // await registerUser('testi', 'salasana');
        // await createUsersTable();
        // await createProjectsTable();
        await client.sql`COMMIT`;

        return Response.json({ message: 'Database tables created successfully' });
    } catch (error) {
        await client.sql`ROLLBACK`;
        return Response.json({ error }, { status: 500 });
    }
}

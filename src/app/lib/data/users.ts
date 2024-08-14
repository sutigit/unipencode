import { sql } from '@vercel/postgres';
import { Project, User } from '../definitions';
import { ProjectSchema } from "../validations";

// SELECT – FROM – WHERE – GROUP BY – HAVING – ORDER BY – LIMIT

// USERS CRUD --------------------------------------------------------------
// export async function createUser(): Promise<User | undefined> {
    // try {
    //     const user = await sql<User>`
    //         INSERT INTO Users 
    //     `;
    //     return user.rows[0];
    // } catch (error) {

    // }
// }

export async function getUser(username: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE username=${username}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
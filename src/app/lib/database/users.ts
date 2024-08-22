import { sql } from '@vercel/postgres';
import { Project, User } from '../definitions';
import { ProjectSchema } from "../validations";

// SELECT – FROM – WHERE – GROUP BY – HAVING – ORDER BY – LIMIT

// USERS CRUD --------------------------------------------------------------
// export async function createUser(): Promise<User | undefined> {
//     try {
//         const user = await sql<User>`
//             INSERT INTO users 
//         `;
//         return user.rows[0];
//     } catch (error) {
//     }
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


export async function updateUser(user: User): Promise<User | undefined> {
    try {
        const updatedUser = await sql<User>`
            UPDATE users
            SET 
                username=${user.username},
                password=${user.password},
                gh_at=${user.gh_at},
                gh_rt=${user.gh_rt},
                gh_et=${user.gh_et},
                gh_rt_et=${user.gh_rt_et},
            WHERE id=${user.id}
            RETURNING *;
        `;
        return updatedUser.rows[0];
    } catch (error) {
        console.error('Failed to update user:', error);
        throw new Error('Failed to update user.');
    }
}
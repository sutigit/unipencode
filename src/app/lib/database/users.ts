// SELECT – FROM – WHERE – GROUP BY – HAVING – ORDER BY – LIMIT
import { sql } from '@vercel/postgres';
import { User } from '../definitions';


// USERS CRUD --------------------------------------------------------------


export async function getUserByUsername(username: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE username=${username}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function getUserById(id: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE id=${id}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}


export async function updateUser(user: User): Promise<User | undefined> {
    try {
        const updatedUser = await sql<User>`
            UPDATE 
                users
            SET 
                username=${user.username},
                password=${user.password},
                gh_at=${user.gh_at},
                gh_rt=${user.gh_rt},
                gh_et=${user.gh_et},
                gh_rt_et=${user.gh_rt_et}
            WHERE 
                id=${user.id}`;

        return updatedUser.rows[0];
    } catch (error) {
        console.error('Failed to update user:', error);
        throw new Error('Failed to update user.');
    }
}
import NextAuth, { type DefaultSession } from "next-auth"
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { readUserByUsername } from "./app/lib/db_actions";
import { UserSchema } from "./app/lib/validations";


declare module "next-auth" {
  interface User {
    username: string
  }

  interface Session {
    user: {
      id: string | unknown,
      username: string | unknown,
    }
  }
}


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = UserSchema.pick({ username: true, password: true }).safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await readUserByUsername(username);
          if (!user) return null;

          // make this use bcrypt
          // const passwordMatch = await bcrypt.compare(password, user.password);

          const passwordMatch = password === user.password;

          if (passwordMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account, profile }) {
      if (user) { // User is available during sign-in
        token.id = user.id;
        token.username = user.username;
      }
      
      return token
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  }
});
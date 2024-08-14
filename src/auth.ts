import NextAuth, { type DefaultSession } from "next-auth"
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getUser } from '@/app/lib/data/users';
import { z } from 'zod';

import bcrypt from 'bcrypt';

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    /** The user's postal address. */
    username: string | unknown,
  }

  interface Session {
    user: {
      /** The user's postal address. */
      username: string,
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}
 

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ 
            username: z.string().min(1),
            password: z.string().min(1)
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
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
        token.username = user.username;
      }

      return token
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      }
    },
  }
})


// OLD EXAMPLES


// import NextAuth, { type DefaultSession } from "next-auth"
// import { JWT } from "next-auth/jwt"
// import GitHub from "next-auth/providers/github"
// import { authConfig } from '@/auth.config';
 
 
// declare module "next-auth" {
//   /**
//    * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface User {
//     /** The user's postal address. */
//     github_account_id: string | unknown,
//   }

//   interface Session {
//     user: {
//       /** The user's postal address. */
//       github_account_id: string,
//       github_access_token: string
//       /**
//        * By default, TypeScript merges new interface properties and overwrites existing ones.
//        * In this case, the default session user properties will be overwritten,
//        * with the new ones defined above. To keep the default session user properties,
//        * you need to add them back into the newly declared interface.
//        */
//     } & DefaultSession["user"]
//   }
// }


// export const { handlers, signIn, signOut, auth } = NextAuth({
//   ...authConfig,
//   providers: [GitHub({
//     async profile(profile) {
//       return {
//         github_account_id: profile.id.toString(),
//         name: profile.login,
//         image: profile.avatar_url,
//       }
//     }
//   })],
//   callbacks: {
//     jwt({ token, user, account, profile }) {
//       if (user) { // User is available during sign-in
//         token.github_account_id = user.github_account_id;
//       }

//       if (account) { 
//         token.access_token = account.access_token;
//       }

//       return token
//     },
//     session({ session, token }) {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           github_account_id: token.github_account_id,
//           github_access_token: token.access_token,
//         },
//       }
//     },
//   }
// })
'use server';

import { AuthError } from 'next-auth';


import { signIn, signOut, auth } from "@/auth"


// CREDENTIALS SIGN IN / SIGN OUT ----------------------------------------------
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      console.error('AuthError', error.type);
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Wrong username or password';
        default:
          return 'Oh, something went wrong... Sorry about it! Could please try again?';
      }
    }
    throw error;
  }
};

export async function signOutCredentials() {
  await signOut();
};


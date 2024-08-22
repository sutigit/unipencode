'use server';

import { cookies } from 'next/headers'
import { CookieTypes } from './enums';

// COOKIE OPERATIONS ----------------------------------------------------------
export async function createCookie(data: { name: CookieTypes.ACCESS_TOKEN | CookieTypes.REFRESH_TOKEN, value: string, expires: Date }) {
    cookies().set({
        name: data.name,

        // TODO: ALWAYS ENCRYPT VALUES
        value: data.value,

        expires: data.expires,

        httpOnly: true,
        secure: true,
    })
}

export async function deleteUOCCookies() {
    cookies().delete(CookieTypes.ACCESS_TOKEN);
    cookies().delete(CookieTypes.REFRESH_TOKEN);
}
import { z } from 'zod';
import { UserSchema, ProjectSchemaWithoutId } from './validations';


export type User = z.infer<typeof UserSchema>

export type Project = z.infer<typeof ProjectSchemaWithoutId>

export type AccessTokenResponse = {
    access_token: string,
    expires_in: number,
    refresh_token: string,
    refresh_token_expires_in: number,
    scope: string,
    token_type: string,
}
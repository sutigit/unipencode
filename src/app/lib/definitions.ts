import { z } from 'zod';
import { UserSchema, ProjectSchemaWithoutId } from './validations';


export type User = z.infer<typeof UserSchema>

export type Project = z.infer<typeof ProjectSchemaWithoutId>
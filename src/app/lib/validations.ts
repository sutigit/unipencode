import { z } from 'zod';


// User Form Validation ------------------------------------------------
export const UserSchema = z.object({
  id: z.string().uuid({ message: 'Invalid User Id' }),
  username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  created_at: z.string().datetime({ message: 'Invalid Date' }),
  gh_at: z.string({ message: 'Invalid Github Access Token' }),
  gh_rt: z.string({ message: 'Invalid Github Refresh Token' }),
  gh_et: z.string().datetime({ message: 'Invalid Github Token Expiry Date' }),
  gh_rt_et: z.string().datetime({ message: 'Invalid Github Refresh Token Expiry Date' }),
});


// Project Form Validation ---------------------------------------------
export const ProjectSchema = z.object({
  id: z.string().uuid(),
  creator_id: z.string().uuid().min(1),
  repository_id: z.string().min(9, { message: 'Invalid Repository Id' }),
  app_link: z.string(),
  description: z.string().trim(),
  status: z.enum(['active', 'inactive']),
  edit_stage: z.enum(['documentation', 'issue-tracking', 'review', 'published']),
  created_at: z.string().datetime(),
});

export const ProjectSchemaWithoutId = ProjectSchema.omit({ id: true });

export function validateProjectSchema(formData: FormData) {
  const CreateProject = ProjectSchema.omit({ id: true });

  const validatedFields = CreateProject.safeParse({
    creator_id: formData.get('creator_id'),
    repository_id: formData.get('repository_id'),
    app_link: formData.get('app_link'),
    description: formData.get('description'),
    status: formData.get('status'),
    edit_stage: formData.get('edit_stage'),
    created_at: new Date().toISOString(),
  });

  return validatedFields;
}
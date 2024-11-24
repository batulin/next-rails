import {z} from "zod";

export const Author = z.object({
  id: z.number(),
  name: z.string(),
})

export const AuthorWithoutId = Author.omit({id: true});

export type Author = z.infer<typeof Author>;
export type AuthorWithoutId = z.infer<typeof AuthorWithoutId>;


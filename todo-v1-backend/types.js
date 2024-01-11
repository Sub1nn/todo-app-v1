import * as zod from "zod";

/* 
{
    title: "string",
    description: "string",
}

{
    id: "string",
}
*/

export const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

export const updateTodo = zod.object({
  id: zod.string(),
});

export const createUser = zod.object({
  fullName: zod.string().trim().min(2).max(60),
  email: zod.string().email().trim().toLowerCase(),
  password: zod.string().min(8),
  gender: zod
    .string()
    .refine((value) => ["male", "female", "other"].includes(value), {
      message: "Invalid gender",
    })
    .default("male"),
});

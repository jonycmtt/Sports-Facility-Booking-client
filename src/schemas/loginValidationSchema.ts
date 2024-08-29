import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Your Login Email Address." })
    .nonempty({ message: "Email cannot be empty." }),

  password: z
    .string({ required_error: "Password is required." })
    .min(6, { message: "Your login password" })
    .nonempty({ message: "Password cannot be empty." }),
});

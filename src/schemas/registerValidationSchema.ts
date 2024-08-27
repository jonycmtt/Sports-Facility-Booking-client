import { z } from "zod";

export const registerValidationSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .nonempty({ message: "Name cannot be empty." }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email cannot be empty." }),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, { message: "Password must be at least 6 characters long." })
    .nonempty({ message: "Password cannot be empty." }),
  phone: z
    .string({ required_error: "Phone number is required." })
    .nonempty({ message: "Phone number cannot be empty." }),
  address: z
    .string({ required_error: "Address is required." })
    .nonempty({ message: "Address cannot be empty." }),
  profilePic: z
    .string({ required_error: "Profile picture URL is required." })
    .nonempty({ message: "Profile picture URL cannot be empty." }),
});

import { z } from "zod";

export const registerBusOwnerSchema = z.object({
  username: z.string().min(2, { message: "enter a valid username" }),
  email: z.string().email({ message: "enter a valid email" }),
  phoneNumber: z.string().min(3, { message: "enter a valid phone number" }),
  password: z.string().min(3, { message: "enter a valid password" }),
});

export const registerUserSchema = z.object({
  username: z.string().min(2, { message: "enter a valid username" }),
  email: z.string().email({ message: "enter a valid email" }),
  phoneNumber: z.string().min(3, { message: "enter a valid phone number" }),
  citizenshipNumber: z
    .string()
    .min(3, { message: "enter a valid citizenship number" }),
  password: z.string().min(3, { message: "enter a valid password" }),
});

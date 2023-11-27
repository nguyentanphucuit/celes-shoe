import { errorMessages } from "@/constants";
import { z } from "zod";

export const SchemaSignIn = z.object({
  email: z
    .string()
    .min(1, { message: errorMessages.required.replace("$field", "Email") })
    .email("Invalid email address"),
  password: z.string().min(6, {
    message: errorMessages.minLength
      .replace("$field", "password")
      .replace("$value", "6"),
  }),
});

export const SchemaSignUp = z
  .object({
    email: z
      .string()
      .min(1, { message: errorMessages.required.replace("$field", "Email") })
      .email("Invalid email address"),
    password: z.string().min(6, {
      message: errorMessages.minLength
        .replace("$field", "password")
        .replace("$value", "6"),
    }),
    confirmPassword: z.string().min(6, {
      message: errorMessages.minLength
        .replace("$field", "password")
        .replace("$value", "6"),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: errorMessages.passwordNotMatch,
  });

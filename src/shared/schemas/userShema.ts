import * as z from 'zod';

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Введите имя (минимум 2 символа)' })
    .regex(/^[A-Za-zА-Яа-яЁё\s-]+$/u, {
      message: 'Имя может содержать только буквы, пробел и дефис',
    }),
  email: z
    .string()
    .min(1, { message: 'Email обязателен' })
    .pipe(z.email({ error: 'Введите корректный email' })),
  phone: z.string().regex(/^\+?\d{11,15}$/, { message: 'Формат телефона: +79991234567' }),
  role: z.enum(['Admin', 'User', 'Manager']),
});

export type UserFormData = z.infer<typeof userSchema>;

import { z } from 'zod';

export const editProfileSchema = z.object({
  fullname: z.string().nonempty('O seu nome é obrigatório'),
  photo: z.string().optional(),
  email: z.string().email("Email inválido").nonempty('O seu e-mail é obrigatório'),
  role: z.string().nonempty('O seu ramo é obrigatório').nullish()
});

export type ConsultSupportSchema = z.infer<typeof editProfileSchema>;

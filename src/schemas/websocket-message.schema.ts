import { z } from 'zod';

const typeSchema = z.enum([
  'GET_ITEMS',
  'ADD_ITEM',
  'UPDATE_ITEM',
  'DELETE_ITEM',
]);

const payloadSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
});

export const messageSchema = z.object({
  type: typeSchema,
  payload: payloadSchema.optional(),
});

export type MessageParsed = z.infer<typeof messageSchema>;
export type MessagePayload = z.infer<typeof payloadSchema>;

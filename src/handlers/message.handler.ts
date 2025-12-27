import {
  messageSchema,
  type MessageParsed,
} from '../schemas/websocket-message.schema';
import { myService } from '../services/my-service.service';
import type { WebSocketMessage, WebSocketResponse } from '../types';

const createErrorResponse = (error: string): WebSocketResponse => {
  return {
    type: 'ERROR',
    payload: { error: error },
  };
};

//! Handlers específicos
const handleAddItem = (
  payload: MessageParsed['payload']
): WebSocketResponse => {
  if (!payload?.name) {
    return createErrorResponse('Name is required');
  }

  const newItem = myService.add(payload.name);

  return {
    type: 'ITEM_ADDED',
    payload: newItem,
  };
};

export const handleGetItems = (): WebSocketResponse => {
  return {
    type: 'ITEMS_LIST',
    payload: myService.getAll(),
  };
};

const handleUpdateItem = (
  payload: MessageParsed['payload']
): WebSocketResponse => {
  if (!payload?.id) {
    return createErrorResponse('Item ID is required');
  }

  const updatedItem = myService.update(payload.id, {
    name: payload.name,
  });

  if (!updatedItem) {
    return createErrorResponse(`Item with id ${payload.id} not found`);
  }

  return {
    type: 'ITEM_UPDATED',
    payload: updatedItem,
  };
};

const handleDeleteItem = (
  payload: MessageParsed['payload']
): WebSocketResponse => {
  if (!payload?.id) {
    return createErrorResponse(`Item with id ${payload?.id} not found`);
  }

  const deleted = myService.delete(payload.id);

  if (!deleted) {
    return createErrorResponse(
      `Item with id ${payload.id} not found or can't be deleted`
    );
  }

  return {
    type: 'ITEM_DELETED',
    payload: {
      id: payload.id,
    },
  };
};

//! General Handler o controlador general
export const handleMessage = (message: string): WebSocketResponse => {
  try {
    const jsonData: WebSocketMessage = JSON.parse(message);
    const parsedResult = messageSchema.safeParse(jsonData);

    if (!parsedResult.success) {
      console.log(parsedResult.error);
      const errorMessage = parsedResult.error.issues
        .map((issue) => issue.message)
        .join(', ');

      return createErrorResponse(`Validation error ${errorMessage}`);
    }

    const { type, payload } = parsedResult.data;

    switch (type) {
      case 'ADD_ITEM':
        return handleAddItem(payload);

      case 'UPDATE_ITEM':
        return handleUpdateItem(payload);

      case 'DELETE_ITEM':
        return handleDeleteItem(payload);

      default:
        return createErrorResponse(`Unknown message type: ${type}`);
    }
  } catch (error) {
    return createErrorResponse(`Validation error`);
  }
};

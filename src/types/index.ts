//! Este es el objeto que se almacena por cada cliente
export interface WebSocketData {
  clientId: string;
}

//! Este es el objeto que recibe el servidor
export interface WebSocketMessage {
  type: MessageType;
  payload: unknown;
}

export type MessageType = 'PERSONAL_MESSAGE' | 'BROADCAST_MESSAGE';

//! Este es el objeto que se envía al cliente
export interface WebSocketResponse {
  type: ResponseType;
  payload: unknown;
}

export type ResponseType =
  | 'ERROR'
  | 'PERSONAL_RESPONSE_MESSAGE'
  | 'BROADCAST_RESPONSE_MESSAGE'
  | 'ITEM_ADDED'
  | 'ITEM_UPDATED'
  | 'ITEM_DELETED'
  | 'ITEMS_LIST';

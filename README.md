## WebSocket Server - Partidos Políticos

### Ejecutar en dev

1. Clonar proyecto
2. Ejecutar `bun install`
3. Crear `.env` basado en `.env.template`
4. Ejecutar `bun run dev`

### Probar en el navegador

1. Abrir el archivo `http://localhost:3200` en el navegador
2. En la consola crear el mensaje así:

```javascript
const message = {
  type: 'ALGUN_TIPO_DE_MENSAJE',
  payload: {
    id: 'un-identificador-de-un-item',
  },
};
```

3. Usar el objeto `socket` para enviar el mensaje

```javascript
socket.send(JSON.stringify(message));
```

4. Ver el resultado en la consola del navegador

## Documentación

A continuación se enumeran los **tipos de mensajes** (`MessageType`) que el servidor WebSocket acepta, junto con el payload esperado para cada uno:

Ejemplo de mensaje:

```javascript
const message = {
  type: 'ALGUN_TIPO_DE_MENSAJE',
  payload: {
    id: 'un-identificador-de-un-item',
  },
};
```

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
  type: 'INCREMENT_VOTES',
  payload: {
    id: 'un-identificador-de-un-partido',
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
  type: 'INCREMENT_VOTES',
  payload: {
    id: 'un-identificador-de-un-partido',
  },
};
```

### Tipos de mensaje (`MessageType`)

- **GET_PARTIES**  
  Solicita la lista de partidos políticos.  
  **Payload:** _No es necesario, puede omitirse o ser un objeto vacío._

- **ADD_PARTY**  
  Agrega un nuevo partido político.  
  **Payload:**

  ```json
  {
    "name": "Nombre del partido",
    "color": "#HEX", // o rgba
    "borderColor": "#HEX" // o rgba
  }
  ```

- **UPDATE_PARTY**  
  Actualiza los datos de un partido existente.  
  **Payload:**

  ```json
  {
    "id": "id-del-partido", // este no se actualizará, solo se usa para identificar el partido
    "name": "Nuevo nombre (opcional)",
    "color": "#HEX (opcional)", // o rgba
    "borderColor": "#HEX (opcional)" // o rgba
  }
  ```

- **DELETE_PARTY**  
  Elimina un partido por su ID.  
  **Payload:**

  ```json
  {
    "id": "id-del-partido"
  }
  ```

- **INCREMENT_VOTES**  
  Suma 1 voto al partido especificado.  
  **Payload:**

  ```json
  {
    "id": "id-del-partido"
  }
  ```

- **DECREMENT_VOTES**  
  Resta 1 voto al partido especificado.  
  **Payload:**
  ```json
  {
    "id": "id-del-partido"
  }
  ```

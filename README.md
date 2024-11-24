
# OpenAI Flask App

Este es un servidor Flask básico que integra la API de OpenAI para manejar un chatbot personalizado.

## Requisitos

- Python 3.7 o superior
- Una cuenta de OpenAI con acceso a la API y una clave API

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/openai_flask_app.git
   cd openai_flask_app
   ```

2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

3. Configura tu clave API de OpenAI como variable de entorno:
   ```bash
   export OPENAI_API_KEY="tu-clave-api"
   ```

4. Inicia el servidor:
   ```bash
   python app.py
   ```

## Uso

Envía solicitudes POST al endpoint `/chat` con un JSON que incluya el mensaje del usuario:
```json
{
  "message": "Hola, ¿cómo estás?"
}
```

El servidor responderá con el mensaje generado por el modelo de OpenAI.

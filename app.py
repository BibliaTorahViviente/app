
import os
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Configura tu clave API de OpenAI como variable de entorno
openai.api_key = os.getenv("OPENAI_API_KEY", "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")

@app.route('/chat', methods=['POST'])
def chat():
    """
    Endpoint para manejar solicitudes de chat.
    """
    try:
        data = request.json
        user_message = data.get("message", "")

        # Configuración de OpenAI ChatCompletion
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Eres un asistente personalizado con tono amigable y profesional."},
                {"role": "user", "content": user_message}
            ],
            temperature=0.7,
            max_tokens=150,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.6
        )

        # Respuesta del modelo
        model_reply = response['choices'][0]['message']['content']
        return jsonify({"reply": model_reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

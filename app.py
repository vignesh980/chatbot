from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_model.chatbot_logic import get_response

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    question = data.get('message')
    response = get_response(question)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
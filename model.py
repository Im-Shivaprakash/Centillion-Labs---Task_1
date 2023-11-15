from flask import Flask, request, jsonify, render_template
from flask_cors import CORS 

from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load the Hugging Face text generation model (GPT-2)
text_generator = pipeline('text-generation', model='gpt2')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'GET':
        return "Send a POST request with 'text' parameter to generate text."

    if request.method == 'POST':
        text = request.form.get('text') if request.form.get('text') else request.json.get('text')

        if text:
            # Generate text using the Hugging Face text generation model
            generated_text = text_generator(text, max_length=50, num_return_sequences=1)

            # Get the generated text from the model output
            generated_output = generated_text[0]['generated_text']

            # Creating a response JSON
            response = {
                'input_text': text,
                'generated_text': generated_output
            }

            return jsonify(response)
        else:
            return "Please provide 'text' parameter in the request.", 400  # Bad Request

if __name__ == '__main__':
    app.run(debug=True)

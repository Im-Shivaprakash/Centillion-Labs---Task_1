# Text Generation Project with ReactJS Frontend and Flask Backend

This project is aimed at generating text using the GPT-2 model from OpenAI. It features a ReactJS frontend for user interaction and a Flask backend to connect with the model and serve the generated text.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js and npm for running the ReactJS frontend.
- Python 3.x and pip for running the Flask backend.
- A working internet connection to download required dependencies.

## Installation

### Frontend (ReactJS)

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Once installation is complete, run `npm start` to start the frontend server.
4. The ReactJS application will be served at `http://localhost:3000`.

### Backend (Flask)

1. Navigate to the `backend` directory.
2. Create a virtual environment using `python3 -m venv venv`.
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS and Linux: `source venv/bin/activate`
4. Install the required Python packages with `pip install -r requirements.txt`.
5. Start the Flask server by running `python app.py`.
6. The Flask application will be served at `http://localhost:5000`.

## Usage

1. Visit `http://localhost:3000` in your web browser to access the ReactJS frontend.
2. Enter your text generation prompt in the provided input field.
3. Click on the "Generate" button to send the prompt to the Flask backend.
4. The backend will use the GPT-2 model to generate text based on the prompt and return the generated text to the frontend.
5. The generated text will be displayed on the webpage.

## Notes

- The GPT-2 model used in this project is a pre-trained model from OpenAI. Make sure you comply with OpenAI's usage policies and guidelines.
- This project is intended for educational and demonstration purposes only. Use it responsibly and ethically.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.



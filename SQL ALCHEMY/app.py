
import json
from flask import Flask,request, jsonify,send_file
from flask_cors import CORS



app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/data<br/>"
    )   

@app.route('/api/data', methods=['GET'])
def get_data():
   
    
    response = send_file ('output.json')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    

if __name__ == "__main__":
     app.run(debug=True)

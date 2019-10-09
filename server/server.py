from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from flask_jsonpify import jsonify
import json

app = Flask(__name__)

CORS(app)

@app.route('/LogIn', methods=['POST'])
def api_LogIn():

    storedU = 'peterdaly'
    storedP = 'testing'

    # Get variables passed by request
    username = request.get_json()['username']
    password = request.get_json()['password']
   
    if storedU == username and storedP == password :
        # Return that password was accepted
        accept = True
    else :

        # Return that password wasn't accepted
        accept = False
    return Response(
            json.dumps(accept),
            mimetype='application/json'
        )    

@app.route('/Test', methods=['GET'])
def api_Test():
    return jsonify({'text':'Hello World!'})

if __name__ == '__main__':
    app.run(port=5000)
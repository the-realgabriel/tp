from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)


app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///Niel.db'


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Add a secret key for JWT
app.config['JWT_SECRET_KEY'] = 'your-secret-key' 

db = SQLAlchemy(app)
jwt = JWTManager(app)



from config import db

class Contact(db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False, nullable=False)  
    last_name = db.Column(db.String(80), unique=False, nullable=False)  
    email = db.Column(db.String(180), unique=True, nullable=False)  

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(180), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=True, nullable=False)

class Balance(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    account_fund = db.Column(db.Integer, unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "firstname": self.first_name,
            "lastname": self.last_name,
            "email": self.email,
            "password": self.password,
            "accountfund": self.account_fund,
        }

from flask import request, jsonify
from config import app, db
from models import Contact, User, Balance
from bcrypt import hashpw, gensalt, checkpw

@app.route('/register', methods=["POST"])
def register():

    email = request.json.get('email')
    password = request.json.get('password')

    if not email or not password:
       return (jsonify({"message": "Missing data"}), 400) 
    
    harshed_password = hashpw(password.encode('utf-8'), gensalt()) 

    new_user = User( email=email, password=harshed_password)

    db.session.add(new_user)
    db.session.commit() 


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "email and password are required"}), 400
   
    if User and checkpw(password.encode('utf-8'), User['password'].encode('utf-8')):
            return jsonify({"message": "Login successful"}), 200
    else:
            return jsonify({"error": "Invalid email or password"}), 401
    

@app.route("/contacts", methods=["GET"])  
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({'contacts': json_contacts})

@app.route("/create_contact", methods=["POST"]) 
def create_contact():
   first_name = request.json.get('first_name')
   last_name = request.json.get('last_name') 
   email = request.json.get('email')
   

   if not first_name or not last_name or not email :
       return (jsonify({"message": "Missing data"}), 400) 
   
   

   new_contact = Contact(first_name=first_name, last_name=last_name, email=email, )
   try:
         db.session.add(new_contact)
         db.session.commit() 

   except Exception as e:
       return jsonify({'message': str(e)}), 400
   
   return jsonify({"message": "User added"}), 201

@app.route("/update_contact/<int:user_id>", methods=["PATCH"])
def update_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message": 'user not found'}), 404
    data = request.json
    contact.first_name = data.get('firstname', contact.first_name)
    contact.last_name = data.get('firstname', contact.last_name)
    contact.email = data.get('firstname', contact.email)
    contact.password = data.get('password', contact.password)

    db.session.commit()

    return jsonify ({"message": "user Updated"}), 200

@app.route('/delete/<int:user_id>', methods = ['DELETE'])
def delete(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message": "user not found"}), 404
    
    db.scession.delete(contact)
    db.scession.commit()

    return jsonify({"message": "User deleted!"}), 200

@app.route( "/balance/<int:user_id>", methods = ['PATCH'])
def balance(user_id):
    balance = Balance.query.get(user_id)

    if not balance:
        return jsonify({'message': '0.00'})
    data = request.json
    balance.account_fund = data.get('account_fund', balance.account_fund)

    db.scession.commit()

    return jsonify({"message": "money added"})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
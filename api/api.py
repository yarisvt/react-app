from datetime import datetime

from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__)


@api.route("/api/time")
def time():
    return jsonify({"time": datetime.now()}), 200


@api.route("/api/create-user", methods=["POST"])
def set_time():
    json_data = request.get_json(force=True)
    name = json_data.get("name", "")
    if name == "":
        return jsonify({
            "message": "Name should not be empty",
            "name": name
        }), 400
    return jsonify({
        "message": "User created succesfully",
        "name": "test"
    }), 201

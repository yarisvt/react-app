from flask import Flask, jsonify, render_template
from datetime import datetime

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route('/api/time')
def time():
    return jsonify({"time": datetime.now()}), 200


if __name__ == '__main__':
    app.run(debug=True)

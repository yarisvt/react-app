from datetime import datetime

from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/info")
def info():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("index.html")


@app.route("/shop")
def shop():
    return render_template("index.html")


@app.route("/shop/<item>")
def shop_item(item):
    print(item)
    return render_template("index.html")


@app.route('/api/time')
def time():
    return jsonify({"time": datetime.now()}), 200


if __name__ == '__main__':
    app.run(debug=True)

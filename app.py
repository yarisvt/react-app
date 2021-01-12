from flask import Flask, render_template, request, jsonify

from api.api import api

app = Flask(__name__)
app.register_blueprint(api)


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
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)

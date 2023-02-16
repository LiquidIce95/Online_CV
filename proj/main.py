from flask import Flask,request,jsonify,render_template
from util import *
from matplotlib import pyplot as plt
import mpld3

# crates flask app
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/multiply",methods=["POST"])
def mul():
    data = request.get_json()
    num = data.get('num')
    res = multiply_two(num)

    return jsonify({"result":res})



if __name__=="__main__":
    app.run(host='0.0.0.0')
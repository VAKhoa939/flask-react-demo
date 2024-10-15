from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

allowed_origins: list[str] = ['http://localhost:5173']

CORS(app, resources={r'/*': {'origins': allowed_origins}})

@app.route("/products")
def products():
  return {"products" : [{"id" : 1, "name" : "a", "price" : 10}, {"id" : 2, "name" : "b", "price" : 20}, {"id" : 3, "name" : "c", "price" : 30}]}

if __name__ == "__main__":
  app.run(debug=True)
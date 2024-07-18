from flask import Flask # type: ignore
from logging.config import dictConfig
import os
from pymongo import MongoClient # type: ignore

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})

current_env = os.environ.get("ENVIRONMENT", default=None)
db_host = os.environ.get("DATABASE_HOST", default="127.0.0.1")
db_port = os.environ.get("DATABASE_PORT", default=27017)
db_username = os.environ.get("DATABASE_USERNAME", default="mongodb")
db_pwd = os.environ.get("DATABASE_PASSWORD", default="mongodb")

app = Flask(__name__)


if (current_env is not None):
    if (current_env == "local"):
        app.config.from_pyfile('./settings/local.py')
    elif (current_env == "prod"):
        app.config.from_pyfile('./settings/prod.py')
    else:
        raise RuntimeError("Unknown env")
    

client = MongoClient(db_host, int(db_port), username=db_username, password=db_pwd)
db = client.pythondb
payment = db.payment

@app.route("/", methods=['GET'])
def hello_world():
    return "<p>" + app.config["MESSAGE"] + "</p>"


@app.route("/v1/payments", methods=['GET'])
def getPayments():
    payments = []
    app.logger.info("Retrieve all payments")
    cursor = payment.find()
   
    
    for record in cursor:
        app.logger.warning("loop on payments")
        r = {}
        r['id'] = record['id']
        r['description'] = record['description']
        r['amount'] = record['amount']
        r['date'] = record['date']
        payments.append(r)

    return payments
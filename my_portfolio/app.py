import json
from flask import Flask, render_template
from pathlib import Path

app = Flask(__name__)

data_path = 'data/portfolio.json'

config_path: Path = Path().joinpath(
    Path().absolute(),
    Path(data_path)
)


def refresh_config():
    with open(config_path, 'r') as _f:
        config = json.load(_f)

    return config


@app.route('/')
def index() -> str:
    config = refresh_config()
    return render_template("base.html", config=config)


@app.route('/resume')
def resume() -> str:
    config = refresh_config()
    return render_template("resume.html", config=config)


@app.route('/resume/1')
def resume1() -> str:
    config = refresh_config()
    return render_template("resume_1.html", config=config)


if __name__ == '__main__':
    app.run(debug=True)

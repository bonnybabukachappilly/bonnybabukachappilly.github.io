import json
from flask import Flask, render_template
import os
from pathlib import Path

app = Flask(__name__)

data_path = 'data/portfolio.json'

config_path: Path = Path().joinpath(
    Path().absolute(),
    Path(data_path)
)


@app.route('/')
def index() -> str:
    with open(config_path, 'r') as _f:
        config = json.load(_f)

    return render_template("base.html", config=config)


@app.route('/generate_static')
def generate_static() -> str:
    file_path = os.path.join(os.getcwd(), 'static', 'generated_page.html')

    html_content = render_template('base.html', title="Static HTML Page")

    with open(file_path, 'w') as file:
        file.write(html_content)

    return f'Successfully generated static HTML file at {file_path}'


if __name__ == '__main__':
    app.run(debug=True)

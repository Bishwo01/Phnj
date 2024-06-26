from flask import Flask, request, redirect, url_for, render_template

app = Flask(__name__)

username = ""

@app.route('/', methods=['GET', 'POST'])
def index():
    global username
    if request.method == 'POST':
        username = request.form['username']
        return redirect(url_for('page2'))
    return render_template('index.html')

@app.route('/page2', methods=['GET', 'POST'])
def page2():
    global username
    if request.method == 'POST':
        with open('record.html', 'w') as file:
            file.write(f'Username: {username}')
        return redirect(url_for('index'))
    return render_template('page2.html')

@app.route('/record', methods=['GET'])
def record():
    return render_template('record.html', username=username)


if __name__ == '__main__':
    app.run(port=3000)
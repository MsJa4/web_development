from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

# create an instant of the class
app =Flask(__name__)

# connecting from form to postgresql (database)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:CO-27-131u3@localhost/quotes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# create an instance of SQLalchemy to pass data from the form to the database
db = SQLAlchemy(app)

class Favquotes(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    author = db.Column(db.String(30))
    quotes = db.Column(db.String(2000))

# use a root decorator to create a root for the application
@app.route('/')
def index():
    result = Favquotes.query.all()
    listcolors = ['magenta','babyblue', 'olive']
    return render_template('index.html', quote1 = "I cannot teach anybody anything, I can only make them think. - Socrates", colors = listcolors,result=result)
# "")  # '<h1>Hello World! Welcome to Flask</h1>'

@app.route('/quotes')
def quotes():
    return render_template('quotes.html')

@app.route('/process', methods = ['POST'])
def process():
    author = request.form['author']
    quote = request.form['quote']
    quotedata = Favquotes(author = author, quotes = quote)
    db.session.add(quotedata)
    db.session.commit()
    return redirect(url_for('index'))


if __name__ == '__main__':
    with app.app_context():db.create_all()
    app.run()


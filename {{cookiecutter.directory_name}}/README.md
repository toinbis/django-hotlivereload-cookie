# {{cookiecutter.project_name}} project with django live reload support

## Installation
1. Create/activate virtualenv  
2. $ pip install -r requirements.txt  
3. $ yarn install
4. $ cp .env.exmple .env && vim .env //Edit the values, create db, etc.  
5. $ python manage.py makemigrations
  
## Running locally  (3 different shells)  
    
1. $ node server.js  
2. $ python manage.py livereload --ignore-static-dirs  
3. $ python manage.py runserver  

## Deploying
//Heroku+Git
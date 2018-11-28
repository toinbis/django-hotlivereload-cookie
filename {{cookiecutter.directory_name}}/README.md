# {{cookiecutter.project_name}} project with django live reload support

## Installation
1. Create/activate virtualenv  
2. $ pip install -r requirements.txt  
3. $ yarn install
4. Create postgress db.
4. $ cp .env.exmple .env && vim .env //Edit the values.  
5. $ python manage.py migrate
  
## Running locally  (3 different shells)  
    
1. $ node server.js  
2. $ python manage.py livereload --ignore-static-dirs  
3. $ python manage.py runserver  

## Deploying to git(hub)  
1. Create github repo online  
2. $ git init  
3. $ git add .
4. $ git commit -am "initial commit"
5. $ git remote add origin {git@github.com:user/repo_name.git}
6. $ git push -u origin master

## Deploying to heroku - initial actions
1. Create heroku app online
2. Create database app online
3. Set all env variables online:
    a) SECRET_KEY //Generate online
    b) WEBPACK_STATS has to be set to webpack-stats-prod.json
    c) DATABASE_URL is being set automatically by heroku
4. heroku git:remote -a {project_name}

## Deploying to heroku - each deploy flow
1. $ yarn build:prod
2. $ git commit
3. $ git push && git push heroku master
[WIP]: An example Twitter replica using express, sequelize, typescript, mysql

# Getting started:

1. Create a mysql database locally. Edit the db username and password in src/db/config/database.js
2. `npm run db:create`
3. `npm i`
4. `npm start`


# How it works
1. At each npm start, the database tables are dropped and migrations are run.
2. The migrations are stored in `src/db/migrations` and they are automatically run by umzug
3. Go to http://localhost:8000 for homepage
4. Go to http://localhost:8000/api/users for users
5. Go to http://localhost:8000/api/tweets for tweets

# Few tips:
1. To create db through sequelize-cli run ``npm run db:create``
2. To migrate db `npm run db:migrate`

# Using docker
1. To build ``docker-compose build`` 
2. To run ``docker-compose up`` 
3. To create db through sequelize-cli run ``docker-compose run --rm backend npm run db:create``
4. To migrate db `docker-compose run --rm backend npm run db:migrate`


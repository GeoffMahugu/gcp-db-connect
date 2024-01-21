# GCP Database Setup

This doc will contain info on how to connect to your database on GCP.

## Install dependancies:

Run `npm i`

This will install `ps` which is a postgress driver library and `dotenv` to access environment variables from the `.env` file.

## Update your DB Credentails

Update your `.env` with your server's credentials.

DB_NAME=db_name
DB_USER=postgres_user
DB_PASSWORD=password
DB_IP_ADDRESS=192.168.100.10


## Connect to the database

To connect to the postgres database run:

`node psql-connect`

For a single connection string use:

```

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_IP_ADDRESS}:5432/${process.env.DB_NAME}`;


```



## PSQL Cheatsheet

This section will contain basic commands to view and manage your postgres instance.


### To access the GCP DB instance:


`gcloud sql connect waya-psql --user=postgres --quiet`

### To access shell for postgres:

`psql -h IP_ADDRESS -U postgres`

### To list databases:

`\l;`


### To connect to a database:

`\c DB_NAME;`

### To list the tables in the database:

`\dt;`

### To select from a table:

`select * from TABLE_NAME;`

### To create a new database run:

`CREATE DATABASE database_name;`

### To create a new user:

`CREATE USER username WITH PASSWORD 'password';`


### To grant privileges on the database to a certain user


`GRANT ALL PRIVILEGES ON DATABASE your_database_name TO user_name;`


### To switch to a user run:

psql -U username
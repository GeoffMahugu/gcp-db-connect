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
IP_ADDRESS=35.192.130.208


## Connect to the database

To connect to the postgres database run:

`node psql-connect`

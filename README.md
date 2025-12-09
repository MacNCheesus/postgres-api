# Postgres API
A REST API to create, read, update, and delete users connected to a local PostgreSQL database using Docker. 
Using Joi for input validation.

## Docker Setup
* Download Docker for desktop: https://docs.docker.com/desktop/
* Run `docker pull postgres`
* Run `docker run --name {container_name} -e POSTGRES_PASSWORD={password} -p 5432:5432 -d postgres` to create and run a container in Docker
* Run `docker exec -it {container_name} psql -U postgres` to connect the container to Postgres
* Use the PGAdmin4 extension within Docker to register a server: https://github.com/marcelo-ochoa/pgadmin4-docker-extension 
* Create a new database within the server

## Usage
* Clone
* Create an .env file with port number and database variables
* Run `npm install`
* Run `npm run dev`
* Should start a service listening on port `5001`
* Now users can be added and updated to a local users table by calling http://localhost:5001/api/users

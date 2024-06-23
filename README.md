# NestJS with MongoDB Example

This repository contains an example project for learning NestJS with MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Docker installed to run MongoDB and Mongo Express.
- Basic familiarity with Docker and Docker Compose.

### Installing

Follow these steps to get a development environment running:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/devsnowin/nest-with-mongodb.git
   ```

2. Navigate into the project directory:

   ```bash
   cd nest-with-mongodb
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Docker Setup

To set up MongoDB and Mongo Express using Docker Compose, create a `docker-compose.yml` file with the following contents:

```yaml
version: '3'

services:
  db:
    image: mongo
    container_name: nestDB
    environment:
      MONGO_INITDB_DATABASE: nestDB
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: password
    ports:
      - 27017:27017
    volumes:
      - ./docker-data/mongodb:/data

  mongo-express:
    image: mongo-express
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:password@db:27017/
      ME_CONFIG_BASICAUTH: true
    volumes:
      - ./docker-data/mongodb-express:/data
```

Run `docker-compose up` in the terminal to start MongoDB and Mongo Express.

### Running the Application

To start the application, run:

```bash
npm run start
```

The server will start on `http://localhost:3333` by default.

### Acknowledgments

- [NestJS Official Documentation](https://docs.nestjs.com/techniques/mongodb#connection)
- [Mongoose ORM](https://mongoosejs.com/docs/)
- [YouTube Video](https://www.youtube.com/watch?v=dJz94r5C3QA&t=613s)

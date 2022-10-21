# NodeJS-NestJS-MongoDB-CRUD-Demo

![alt text](https://github.com/Muaazbinsaeed/Node-Nest-Mongodb-CRUD/blob/main/project-swagger.png?raw=true)


# Environment Variables

This project uses the following environment variables:

| Name      | Description             | Default Value |
| --------- | ----------------------- | ------------- |
| MONGO_URI | URI for MongoDB Cluster |               |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 16.16.0

# Getting started

- Clone the repository

```bash
git clone https://github.com/Muaazbinsaeed/Node-Nest-Mongodb-CRUD.git
```

- Install dependencies

```bash
cd <project_name>
npm install
```

- Build and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

### Project layout

```
|-app/                          // Root directory
|  |
|  |-src/                       // Source Code
|  |  |
|  |  |-items                   // Item Resource
|  |  |  |
|  |  |  |-dto                  // Item Data Transfer Objects
|  |  |  |-interfaces           // Item Interfaces
|  |  |  |-schemas              // Item Schemas
|  |  |  |-items.controller.ts  // Item Controller
|  |  |  |-items.module.ts      // Item Module
|  |  |  |-items.service.ts     // Item Provider
|  |  |
|  |  |- app.module.ts          // NestJS App Module
|  |  |- main.ts                // Entry Point of Project
|  |
|  |- README.md                 // README File
|  |- ...                       // Other Config Files

```

### Endpoints

#### Items Service

| HTTP Method | URL                             | Description             |
| ----------- | ------------------------------- | ----------------------- |
| `GET`       | http://localhost:3000/items     | Get all items           |
| `GET`       | http://localhost:3000/items/:id | Get the item with id    |
| `POST`      | http://localhost:3000/items     | Create an item          |
| `PUT`       | http://localhost:3000/items/:id | Update the item with id |
| `DELETE`    | http://localhost:3000/items/:id | Delete the item with id |

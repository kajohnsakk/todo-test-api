# Todo List API

This is a simple Todo List API built with Node.js and Express.js. It provides endpoints to manage tasks in a todo list.

## Table of Contents

- [Installation](#installation)
- [Run Tests](#run-tests)
- [API Documentation](#api-documentation)

## Installation

1. Clone the repository:

```
git clone git@github.com:kajohnsakk/todo-test-api.git
```

2. Change into the project directory:

```
cd todo-test-api
```

3. Install dependencies:

```
npm install
```

4. Build the app:

```
npm run build
```

5. Start the server:

```
npm start
```

6. Done.

```
The app will running on port: 3000
```

## Run Tests

```
npm run test
```

## API Documentation

| Endpoint URL  | HTTP Method | Description       | Request Parameters       | Request Example   |
| ------------- | ----------- | ----------------- | ------------------------ | ----------------- |
| `/todos`      | GET         | Get todo list     | N/A                      | `GET /todos`      |
| `/todos/{id}` | GET         | Get todo detail   | `params: id`             | `GET /todos/1`    |
| `/todos`      | POST        | Create a new todo | `body: { task: 'test' }` | `POST /todos`     |
| `/todos/{id}` | PUT         | Update todo by ID | `body: { task: 'test' }` | `PUT /todos/1`    |
| `/todos/{id}` | DELETE      | Delete todo by ID | `params: id`             | `DELETE /todos/2` |

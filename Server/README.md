# Student Table Server

## Tasks

- Create Database model from table column names
- Create necessary routeractions for the Front-end tasks

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`



## API Reference

#### Get all students

```http
  GET /students
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` | Page number for pagination |



#### Get a user by id

```http
  GET /students/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Create a user

```http
  POST /students
```

| Body Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` or `number` | **Required**. Id of student |
| `team` | `string` | **Required**. Team of student |
| `country` | `string` | **Required**. Country of student |
| `firstname` | `string` | **Required**. First Name of student  |
| `lastname` | `string` | **Required**. Last Name of student  |
| `dateOfBirth` | `string` | **Required**. Birth Date of student  |
| `hometown`      | `string` | **Required**. Hometown of student  |
| `province`      | `string` | **Required**. Province of student  |
| `isVerified`      | `boolean` | **Required**. Status of student  |
| `age`      | `string` or `number` | **Required**. Age of student  |



#### Delete a user by id

```http
  DELETE /students/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Search a user by name or surname

```http
  GET /students/search/${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Keyword of item to fetch |
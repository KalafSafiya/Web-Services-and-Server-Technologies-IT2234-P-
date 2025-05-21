
# Course API - Express Router

This module provides API routes for managing course data using Express.js and MongoDB (Mongoose)

### 1. GET `/`

**Description**: Retrieve all course records.

- **Response**:
  - `200 OK`: Returns an array of all courses.
  - `404 Not Found`: No data found in the database.
  - `500 Server Error`: An error occurred on the server.
 
  ![Get all the courses](https://github.com/user-attachments/assets/357bc184-db5f-4e78-97a6-b79863a4e41a)


### 2. GET `/:id`

**Description**: Retrieve a course by its MongoDB Object ID.

- **URL Parameter**:
  - `id`: The `_id` field of the course document.

- **Response**:
  - `200 OK`: Returns the course object.
  - `404 Not Found`: No course found with the given ID.
  - `500 Server Error`: An error occurred on the server.
 
  ![image](https://github.com/user-attachments/assets/ec276644-249b-4f4c-8756-c441feaab1dc)


### 3. GET `/code/:cid`

**Description**: Retrieve course(s) by course code.

- **URL Parameter**:
  - `cid`: The `code` field of the course.

- **Response**:
  - `200 OK`: Returns the matched course(s).
  - `404 Not Found`: No course found with the given code.
  - `500 Server Error`: An error occurred on the server.
  - 
![image](https://github.com/user-attachments/assets/db72806b-95f2-4d62-b9dc-2ff132275c96)


### 4. POST `/`

**Description**: Create a new course entry.

- **Request Body (JSON)**:
  - `code` (string) - required
  - `name` (string) - required
  - `credits` (number) - required
  - `description` (string) - optional

- **Response**:
  - `200 OK`: Returns the created course object.
  - `400 Bad Request`: Required fields are missing.
  - `500 Server Error`: An error occurred on the server.
 
  ![Adding data using POST](https://github.com/user-attachments/assets/711679e5-42d0-43ea-85c6-a54237cd8b56)


### 5. PUT `/:id`

**Description**: Update an existing course by ID.

- **URL Parameter**:
  - `id`: The `_id` of the course to update.

- **Request Body (JSON)**:
  - `code` (string) - required
  - `name` (string) - required
  - `credits` (number) - required
  - `description` (string) - optional

- **Response**:
  - `200 OK`: Returns the updated course object.
  - `400 Bad Request`: Invalid ID or required fields missing.
  - `500 Server Error`: An error occurred on the server.

![updating using PUT](https://github.com/user-attachments/assets/67dff328-c004-4c65-ac75-3fa3c6cbb82b)


### 6. DELETE `/:id`

**Description**: Delete a course by its ID.

- **URL Parameter**:
  - `id`: The `_id` of the course to delete.

- **Response**:
  - `200 OK`: Returns the deletion result.
  - `400 Bad Request`: Invalid ID format.
  - `500 Server Error`: An error occurred on the server.
 
  ![DELETE](https://github.com/user-attachments/assets/d167169d-e646-4e0a-b84a-85182d79c66e)


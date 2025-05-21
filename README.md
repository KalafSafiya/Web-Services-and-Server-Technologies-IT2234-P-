
## Step-by-Step Explanation: Course REST API Practical

This project creates a REST API using **Node.js**, **Express**, and **MongoDB** to manage course data.

---

## Step-by-Step Breakdown

### 1. Start an Express server
- In `index.js`, the server is started using Express on port `3001`.

### 2. Connect to MongoDB
- The app connects to a local MongoDB database named `studentinfDB` using Mongoose.
- If the connection is successful, it logs:  
  `Database connected`

### 3. Define a course schema
- In `models/Course.js`, a schema is created with fields: `code`, `name`, `credits`, and `description`.
- A course is created and saved with the following details:
  - Code: `IT2234`
  - Name: `Practical for WebService`
  - Credits: `3`
  - Description: `Build a REST API with Node.js technology`

### 4. Set up API routes
- In `routes/courseRoute.js`, API routes are created to handle course data.

### 5. Register the route
- In `index.js`, the route is registered using:
  ```js
  app.use('/course', coursert)
What Each API Does
GET /course/
Fetches and returns all courses from the database.

GET /course/:id
Fetches a specific course by its MongoDB _id.

GET /course/code/:cid
Fetches course(s) by the course code (e.g., IT2234).

![image](https://github.com/user-attachments/assets/be4f15cc-b4f0-485a-b34d-64dfd6341775)
![image](https://github.com/user-attachments/assets/43f9e3dc-0504-4221-9691-8c95ad5d0ce0)


IT2234 Practical  Day 05 - 24/03/2025

Building RESTful APIs 

In this example, we create a RESTful API that manages a list of students. The API allows performing various actions such as retrieving all students, 
searching for a student by registration number, filtering students by gender, name, or course, etc.

Explanation of Routes:
GET /stu - Returns all the students in the database.
![image](https://github.com/user-attachments/assets/08ba7452-7a41-4b65-8dd8-78cb7887ca13)

GET /stu/:id - Fetches the details of a student by their registration number. Returns a 404 error if the student is not found.
![image](https://github.com/user-attachments/assets/db57c555-6aa7-499c-88ad-3ce72092f1e4)

GET /gender/:gen - Filters and returns students based on their gender.
![image](https://github.com/user-attachments/assets/6b24da87-2ff5-48c1-954c-6c220c79565e)

GET /name/:name - Filters and returns students based on their name.
![image](https://github.com/user-attachments/assets/d3b86d36-e241-4cef-ae23-0f4b12cec97b)


Testing:
To test this API, you can use Postman:

Send a GET request to http://localhost:3001/stu to see all students.

Send a GET request to http://localhost:3001/stu/{id} (replace {id} with an actual registration number) to see a specific student.

Send GET requests to http://localhost:3001/gender/{gen}, http://localhost:3001/name/{name}, or http://localhost:3001/course/{course} 
to filter students based on gender, name, or course.







## How It Works
```
Passwords are hashed using bcryptjs before storing in MongoDB.
During login, the entered password is compared using bcrypt.compare().
If valid, a JWT token is generated with the user's ID and username as payload.
This token can be used to access protected routes later
```
### Registering a new user
![Screenshot 2025-06-13 044018](https://github.com/user-attachments/assets/6b5ac08b-4d92-455f-afdd-06af61ef69ee)

### Registering of an already existing user is not possible
![Screenshot 2025-06-13 044030](https://github.com/user-attachments/assets/d1272407-22e6-4e42-8c38-ca6dc618bf23)

### Existing user login
![Screenshot 2025-06-13 044050](https://github.com/user-attachments/assets/72af20b8-ef69-4538-81e3-cf17694ffd80)

### Invalid credentials during login
![Screenshot 2025-06-13 044110](https://github.com/user-attachments/assets/8dbe6e65-8506-4a67-80fd-484e6ee86a7f)

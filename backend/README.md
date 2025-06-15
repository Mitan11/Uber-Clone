# 📘 Backend API Documentation

## 👤 User Registration

### 🔗 Endpoint

`POST /users/register`

---

### 📄 Description

Registers a new user.  
Validates input, hashes the password securely, stores user data in the database, and returns a JWT authentication token.

---

### 🧾 Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (min 3 characters, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

#### ✅ Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### ✅ Success Response

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password" : "securePassword123"
    }
  }
  ```

### ⚠️ Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```

### ❌ Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Something went wrong while creating the user."
  }
  ```

### 📝 Notes for Frontend Developer

- The email must be unique — duplicate entries return a 400 error.
- Passwords are hashed using bcrypt before storage.
- The returned token is a JWT — include it in the Authorization header as Bearer <token> for protected routes.
- Validation follows express-validator format, returned as an array in the "errors" key.

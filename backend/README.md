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
      "password": "securePassword123"
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

## 👤 User Login

### 🔗 Endpoint

`POST /users/login`

---

### 📄 Description

Authenticates a user and returns a JWT token for subsequent requests.

---

### 🧾 Request Body

Send a JSON object with the following structure:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

#### ✅ Example

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### ✅ Success Response

- **Status Code:** `200 OK`
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
      "password": "securePassword123"
    }
  }
  ```

### ⚠️ Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "error": [
      {
        "msg": "Invalid email or password",
        "param": "email",
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
    "error": "Something went wrong while logging in."
  }
  ```

### 📝 Notes for Frontend Developer

- The email must be unique — duplicate entries return a 400 error.
- Passwords are hashed using bcrypt before storage.
- The returned token is a JWT — include it in the Authorization header as Bearer <token> for protected routes.
- Validation follows express-validator format, returned as an array in the "errors" key.

## 👤 User Profile

### 🔗 Endpoint

`GET /users/profile`

---

### 📄 Description

Retrieves the profile of the currently authenticated user.

---

### 🧾 Request Body

No request body required.

### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### ❌ Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Something went wrong while fetching the user profile."
  }
  ```

### 📝 Notes for Frontend Developer

- The user must be authenticated to access this endpoint.
- The returned user object does not include the password.

## 👤 User Logout

### 🔗 Endpoint

`GET /users/logout`

---

### 📄 Description

Logs out the currently authenticated user and invalidates the JWT token.

---

### 🧾 Request Body

No request body required.

### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### ❌ Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Something went wrong while logging out."
  }
  ```

### 📝 Notes for Frontend Developer

- The user must be authenticated to access this endpoint.
- The token is blacklisted and will not be valid for future requests.

## 👤 Captain Registration

### 🔗 Endpoint

`POST /captains/register`

---

### 📄 Description

Registers a new captain.  
Validates input, hashes the password securely, stores captain data in the database, and returns a JWT authentication token.

---

### 🧾 Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (min 3 characters, required)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)",
  "vehicle": {
    "color": "string (min 3 characters, required)",
    "plate": "string (min 3 characters, required)",
    "capacity": "number (min 1, required)",
    "vehicleType": "string (enum: 'car', 'motorcycle', 'auto', required)"
  }
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
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### ✅ Success Response

- **Status Code:** `201 Created`
- **Body:**

  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "securePassword123",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### ⚠️ Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "error": [
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
    "error": "Something went wrong while creating the captain."
  }
  ```

### 📝 Notes for Frontend Developer

- The email must be unique — duplicate entries return a 400 error.
- Passwords are hashed using bcrypt before storage.
- The returned token is a JWT — include it in the Authorization header as Bearer <token> for protected routes.
- Validation follows express-validator format, returned as an array in the "errors" key.

## 👤 Captain Login

### 🔗 Endpoint

`POST /captains/login`

---

### 📄 Description

Authenticates a captain and returns a JWT token for subsequent requests.

---

### 🧾 Request Body

Send a JSON object with the following structure:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

#### ✅ Example

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "securePassword123"
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### ⚠️ Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "error": [
      {
        "msg": "Invalid email or password",
        "param": "email",
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
    "error": "Something went wrong while logging in."
  }
  ```

## 👤 Captain Profile

### 🔗 Endpoint

`GET /captains/profile`

---

### 📄 Description

Retrieves the profile of the currently authenticated captain.

---

### 🧾 Request Body

No request body required.

### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### ❌ Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Something went wrong while fetching the captain profile."
  }
  ```

### 📝 Notes for Frontend Developer

- The captain must be authenticated to access this endpoint.
- The returned captain object does not include the password.

## 👤 Captain Logout

### 🔗 Endpoint

`GET /captains/logout`

---

### 📄 Description

Logs out the currently authenticated captain and invalidates the JWT token.

---

### 🧾 Request Body

No request body required.

### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### ❌ Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Something went wrong while logging out."
  }
  ```

### 📝 Notes for Frontend Developer

- The captain must be authenticated to access this endpoint.
- The token is blacklisted and will not be valid for future requests.
- The token can be provided either in cookies or in the Authorization header.

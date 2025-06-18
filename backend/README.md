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

## 🗺️ Maps API

### Get Coordinates

#### 🔗 Endpoint

`GET /maps/get-coordinates`

#### 📄 Description

Retrieves the geographical coordinates (latitude and longitude) for a given address using Google Maps Geocoding API.

#### 🧾 Query Parameters

| Parameter | Type   | Description                                    | Required |
|-----------|--------|------------------------------------------------|----------|
| address   | string | The address to get coordinates for (min 3 chars)| Yes      |

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "ltd": 12.9716,
    "lng": 77.5946
  }
  ```

#### ⚠️ Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Address must be at least 3 characters long",
        "param": "address",
        "location": "query"
      }
    ]
  }
  ```

#### ❌ Not Found Error

- **Status Code:** `404 Not Found`
- **Body:**
  ```json
  {
    "message": "Coordinates not found"
  }
  ```

#### 📝 Notes for Frontend Developer

- This endpoint requires user authentication.
- The address should be properly formatted for better results.
- The response provides latitude (ltd) and longitude (lng) coordinates.
- The endpoint uses Google Maps Geocoding API internally.
- Make sure to handle cases where coordinates cannot be found for the given address.

### Get Distance and Time

#### 🔗 Endpoint

`GET /maps/get-distance-time`

#### 📄 Description

Calculates the distance and travel time between two locations using Google Maps Distance Matrix API.

#### 🧾 Query Parameters

| Parameter    | Type   | Description                                    | Required |
|--------------|--------|------------------------------------------------|----------|
| origin       | string | Starting location (min 3 chars)                | Yes      |
| destination  | string | Ending location (min 3 chars)                  | Yes      |

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "distance": {
      "text": "5.2 km",
      "value": 5200
    },
    "duration": {
      "text": "15 mins",
      "value": 900
    },
    "status": "OK"
  }
  ```

#### ⚠️ Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Origin must be at least 3 characters long",
        "param": "origin",
        "location": "query"
      }
    ]
  }
  ```

#### ❌ Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "message": "Internal server error"
  }
  ```

#### 📝 Notes for Frontend Developer

- This endpoint requires user authentication.
- Both origin and destination should be properly formatted addresses.
- Distance is returned in both text format (e.g., "5.2 km") and value format (in meters).
- Duration is returned in both text format (e.g., "15 mins") and value format (in seconds).
- The endpoint uses Google Maps Distance Matrix API internally.

### Get Address Suggestions

#### 🔗 Endpoint

`GET /maps/get-suggestions`

#### 📄 Description

Retrieves address suggestions based on user input using Google Maps Places Autocomplete API.

#### 🧾 Query Parameters

| Parameter | Type   | Description                                    | Required |
|-----------|--------|------------------------------------------------|----------|
| input     | string | The search query (min 3 chars)                 | Yes      |

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  [
    "123 Main Street, New York, NY, USA",
    "123 Main Avenue, New York, NY, USA",
    "123 Main Road, New York, NY, USA"
  ]
  ```

#### ⚠️ Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Input must be at least 3 characters long",
        "param": "input",
        "location": "query"
      }
    ]
  }
  ```

#### ❌ Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "message": "Internal server error"
  }
  ```

#### 📝 Notes for Frontend Developer

- This endpoint requires user authentication.
- The input should be at least 3 characters long.
- The response is an array of address suggestions.
- The endpoint uses Google Maps Places Autocomplete API internally.
- Suggestions are returned as full address strings.
- Results are filtered to remove any empty values.




**Base URL**

```text
https://api.campusmesh.com/api/v1
```

---

# Authentication

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| POST   | `/auth/register`        | Register a new user    |
| POST   | `/auth/login`           | User login             |
| POST   | `/auth/logout`          | Logout current session |
| POST   | `/auth/refresh`         | Refresh access token   |
| POST   | `/auth/forgot-password` | Send reset OTP         |
| POST   | `/auth/verify-otp`      | Verify OTP             |
| POST   | `/auth/reset-password`  | Reset password         |

---

# User

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/users/me`     | Get current profile  |
| PUT    | `/users/me`     | Update profile       |
| GET    | `/users/{id}`   | Get user details     |
| GET    | `/users/nearby` | Nearby users via BLE |
| GET    | `/users/search` | Search users         |

---

# Bluetooth Mesh

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| POST   | `/ble/discover` | Sync discovered devices |
| POST   | `/ble/connect`  | Register BLE connection |
| POST   | `/ble/sync`     | Sync offline data       |
| GET    | `/ble/status`   | Mesh status             |

---

# Messaging

| Method | Endpoint              | Description    |
| ------ | --------------------- | -------------- |
| GET    | `/chats`              | Chat list      |
| GET    | `/chats/{id}`         | Chat messages  |
| POST   | `/messages`           | Send message   |
| PUT    | `/messages/{id}/read` | Mark as read   |
| DELETE | `/messages/{id}`      | Delete message |

---

# Groups

| Method | Endpoint                        | Description   |
| ------ | ------------------------------- | ------------- |
| POST   | `/groups`                       | Create group  |
| GET    | `/groups`                       | Group list    |
| POST   | `/groups/{id}/members`          | Add member    |
| DELETE | `/groups/{id}/members/{userId}` | Remove member |

---

# File Sharing

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| POST   | `/files/upload` | Upload file   |
| GET    | `/files/{id}`   | Download file |
| DELETE | `/files/{id}`   | Delete file   |

---

# Attendance

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| POST   | `/attendance`         | Mark attendance    |
| GET    | `/attendance/history` | Attendance history |
| GET    | `/attendance/report`  | Attendance report  |

---

# Campus Directory

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/departments`      | List departments   |
| GET    | `/departments/{id}` | Department details |
| GET    | `/offices`          | List offices       |
| GET    | `/offices/{id}`     | Office details     |
| GET    | `/buildings`        | List buildings     |

---

# Navigation

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| GET    | `/navigation/map`   | Campus map     |
| GET    | `/navigation/route` | Route guidance |

---

# Notifications

| Method | Endpoint                   | Description       |
| ------ | -------------------------- | ----------------- |
| GET    | `/notifications`           | Notification list |
| PUT    | `/notifications/{id}/read` | Mark as read      |

---

# Emergency

| Method | Endpoint               | Description         |
| ------ | ---------------------- | ------------------- |
| POST   | `/emergency/sos`       | Trigger SOS         |
| POST   | `/emergency/broadcast` | Emergency broadcast |

---

# Events

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | `/events`      | Event list    |
| GET    | `/events/{id}` | Event details |

---

# Admin

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/admin/dashboard`   | Dashboard analytics |
| GET    | `/admin/users`       | User management     |
| POST   | `/admin/departments` | Create department   |
| POST   | `/admin/offices`     | Create office       |
| GET    | `/admin/reports`     | Reports             |

---

# Standard Response

### Success

```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

### Error

```json
{
  "success": false,
  "message": "Invalid request",
  "errors": []
}
```

---

# Authentication

* JWT Access Token
* Refresh Token
* Role-Based Access Control (RBAC)
* HTTPS Only

---

# HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Validation Error      |
| 500  | Internal Server Error |

---

# API Principles

* RESTful Endpoints
* Stateless Requests
* Versioned APIs (`/api/v1`)
* JSON Request & Response
* Secure Authentication
* Consistent Error Handling
* Pagination & Filtering Support
* Offline Synchronization Support

---

> **API Goal:** Provide secure, consistent, and scalable endpoints that support both online operations and offline synchronization for the CampusMesh platform.
